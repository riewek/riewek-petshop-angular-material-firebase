import { faker } from '@faker-js/faker';
import { Adopter } from '../model/adopter';
import { AdoptionApplication } from '../model/adoptionApplication';
import { AdoptionContract } from '../model/adoptionContract';
import { Animal } from '../model/animal';
import { Enclosure } from '../model/enclosure';
import { HealthRecord } from '../model/healthRecord';
import { Shelter } from '../model/shelter';
//FIXME: remove Faker fom production

export class FakeData {
  enclosures: Enclosure[];
  shelters: Shelter[];
  animals: Animal[];
  healthRecords: HealthRecord[];
  adopters: Adopter[];
  adoptionApplications: AdoptionApplication[];
  adoptionContracts: AdoptionContract[];

  constructor() {
    faker.seed(1234);
    let i = 1;
    this.enclosures = Array.from({ length: 100 }, () => {
      return {
        id: this.autoId(),
        name: 'Dog Enclosure ' + i++,
        type: faker.helpers.arrayElement(['indoor', 'outdoor']),
        capacity: faker.number.int({ min: 10, max: 20 }),
        occupied: faker.number.int({ min: 10, max: 20 }),
        notes: 'A',
      };
    });
    this.shelters = Array.from({ length: 100 }, () => {
      return {
        id: this.autoId(),
        name: 'A',
        location: this.fullAddress(),
        enclosureIds: [this.enclosures[0].id!],
      };
    });
    this.animals = Array.from({ length: 100 }, () => {
      return {
        id: this.autoId(),
        species: 'Dog',
        breed: faker.animal.dog(),
        birthDate: faker.date.past({ years: 10 }),
        sex: faker.helpers.arrayElement(['male', 'female', 'unknown']),
        intakeDate: faker.date.past({ years: 5 }),
        healthStatus: faker.helpers.arrayElement(['Healthy', 'Warning', 'Critical', 'Unknown']),
        enclosureId: this.enclosures[0].id!,
        photos: [],
        adoptable: true,
      };
    });
    this.healthRecords = Array.from({ length: 100 }, () => {
      return {
        id: this.autoId(),
        animalId: this.animals[0].id!,
        date: faker.date.past({ years: 10 }),
        type: faker.helpers.arrayElement(['checkup', 'vaccination', 'injury']),
        notes: 'A',
        vet: 'B',
        meds: ['C'],
      };
    });
    this.adopters = Array.from({ length: 100 }, () => {
      return {
        id: this.autoId(),
        name: faker.person.fullName(),
        contact: faker.internet.email(),
        address: this.fullAddress(),
        housing: 'E',
        experience: 'F',
      };
    });
    this.adoptionApplications = Array.from({ length: 100 }, () => {
      return {
        id: this.autoId(),
        adopterId: this.adopters[0].id!,
        animalId: this.animals[0].id!,
        createdAt: faker.date.past({ years: 2 }),
        status: faker.helpers.arrayElement([
          'submitted',
          'screening',
          'reserved',
          'approved',
          'rejected',
        ]),
      };
    });
    this.adoptionContracts = Array.from({ length: 100 }, () => {
      return {
        id: this.autoId(),
        adoptionApplicationId: this.adoptionApplications[0].id!,
        contractUrl: 'A',
        signedAt: faker.date.past({ years: 2 }),
        fee: faker.number.int({ min: 10, max: 20 }),
      };
    });
  }

  private fullAddress(): string {
    return `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}, ${faker.location.zipCode()}`;
  }

  private autoId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let autoId = '';
    for (let i = 0; i < 20; i++)
      autoId += chars.charAt(Math.floor(faker.number.float() * chars.length));
    return autoId;
  }
}
