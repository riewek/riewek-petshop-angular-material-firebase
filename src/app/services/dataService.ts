import fakeData from './riewek-petshop-fake-data.json';
import { Adopter } from '../../model/adopter';
import { AdoptionApplication, AdoptionApplicationStatus } from '../../model/adoptionApplication';
import { AdoptionContract } from '../../model/adoptionContract';
import { Animal, AnimalHealthStatus, AnimalSex } from '../../model/animal';
import { Enclosure, EnclosureType } from '../../model/enclosure';
import { HealthRecord, HealthRecordType } from '../../model/healthRecord';
import { Shelter } from '../../model/shelter';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  enclosures: Enclosure[];
  shelters: Shelter[];
  animals: Animal[];
  healthRecords: HealthRecord[];
  adopters: Adopter[];
  adoptionApplications: AdoptionApplication[];
  adoptionContracts: AdoptionContract[];
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
    this.healthRecords = fakeData.healthRecords.map((healthRecord) => {
      return {
        ...healthRecord,
        date: new Date(healthRecord.date),
        type: healthRecord.type as HealthRecordType,
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
}
