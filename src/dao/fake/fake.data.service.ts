import fakeData from './riewek-petshop-fake-data.json';
import { Adopter } from '../../model/adopter';
import { AdoptionApplication, AdoptionApplicationStatus } from '../../model/adoptionApplication';
import { AdoptionContract } from '../../model/adoptionContract';
import { Animal, AnimalHealthStatus, AnimalSex } from '../../model/animal';
import { Enclosure, EnclosureType } from '../../model/enclosure';
import { AnimalHealth, AnimalHealthType } from '../../model/animalHealth';
import { Shelter } from '../../model/shelter';
import { Injectable } from '@angular/core';
import { find } from '../../shared/firebase.model';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  readonly enclosures: Enclosure[];
  readonly shelters: Shelter[];
  readonly animals: Animal[];
  readonly animalHealths: AnimalHealth[];
  readonly adopters: Adopter[];
  readonly adoptionApplications: AdoptionApplication[];
  readonly adoptionContracts: AdoptionContract[];
  constructor() {
    this.enclosures = fakeData.enclosures.map((enclosure) => {
      return {
        ...enclosure,
        type: enclosure.type as EnclosureType,
      };
    });
    this.shelters = fakeData.shelters.map((shelter) => {
      return {
        ...shelter,
      };
    });
    this.animals = fakeData.animals.map((animal) => {
      return {
        ...animal,
        birthDate: new Date(animal.birthDate),
        sex: animal.sex as AnimalSex,
        intakeDate: new Date(animal.intakeDate),
        healthStatus: animal.healthStatus as AnimalHealthStatus,
      };
    });
    this.animalHealths = fakeData.animalHealths.map((animalHealth) => {
      return {
        ...animalHealth,
        date: new Date(animalHealth.date),
        type: animalHealth.type as AnimalHealthType,
      };
    });
    this.adopters = fakeData.adopters.map((adopter) => {
      return {
        ...adopter,
      };
    });
    this.adoptionApplications = fakeData.adoptionApplications.map((adoptionApplication) => {
      return {
        ...adoptionApplication,
        createdAt: new Date(adoptionApplication.createdAt),
        status: adoptionApplication.status as AdoptionApplicationStatus,
      };
    });
    this.adoptionContracts = fakeData.adoptionContracts.map((adoptionContract) => {
      return {
        ...adoptionContract,
        signedAt: new Date(adoptionContract.signedAt),
      };
    });
  }

  adopterId(id: string): Adopter | undefined {
    return find(this.adopters, id);
  }

  adoptionApplicationId(id: string): AdoptionApplication | undefined {
    return find(this.adoptionApplications, id);
  }

  adoptionContractId(id: string): AdoptionContract | undefined {
    return find(this.adoptionContracts, id);
  }

  animalHealthId(id: string): AnimalHealth | undefined {
    return find(this.animalHealths, id);
  }

  animalId(id: string): Animal | undefined {
    return find(this.animals, id);
  }

  enclosureId(id: string): Enclosure | undefined {
    return find(this.enclosures, id);
  }

  shelterId(id: string): Shelter | undefined {
    return find(this.shelters, id);
  }
}
