import fakeData from './riewek-petshop-fake-data.json';
import { Adopter } from '../../model/adopter';
import { AdoptionApplication, AdoptionApplicationStatus } from '../../model/adoptionApplication';
import { AdoptionContract } from '../../model/adoptionContract';
import { Animal, AnimalHealthStatus, AnimalSex } from '../../model/animal';
import { Enclosure, EnclosureType } from '../../model/enclosure';
import { AnimalHealth, AnimalHealthType } from '../../model/animalHealth';
import { Shelter } from '../../model/shelter';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private enclosures: Enclosure[];
  private shelters: Shelter[];
  private animals: Animal[];
  private animalHealths: AnimalHealth[];
  private adopters: Adopter[];
  private adoptionApplications: AdoptionApplication[];
  private adoptionContracts: AdoptionContract[];
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

  findAllEnclosures(): Enclosure[] {
    return this.enclosures;
  }

  findAllShelters(): Shelter[] {
    return this.shelters;
  }

  findAllAnimals(): Animal[] {
    return this.animals;
  }

  findAnimal(id: string): Animal {
    return this.animals.find((animal) => animal.id === id)!;
  }

  deleteAnimal(id: string): void {
    this.animals = this.animals.filter((animal) => animal.id !== id);
    //FIXME updateSignal
  }

  findAllAnimalHealths(): AnimalHealth[] {
    return this.animalHealths;
  }

  findAllAdopters(): Adopter[] {
    return this.adopters;
  }

  findAllAdoptionApplications(): AdoptionApplication[] {
    return this.adoptionApplications;
  }

  findAllAdoptionContracts(): AdoptionContract[] {
    return this.adoptionContracts;
  }
}
