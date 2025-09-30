import { Injectable } from '@angular/core';
import fakeData from './riewek-petshop-fake-data.json';
import { AnimalFirebaseDao } from '../../dao/animal.firebase.dao';
import { AnimalHealthFirebaseDao } from '../../dao/animalHealth.firebase.dao';
import { AdopterFirebaseDao } from '../../dao/adopter.firebase.dao';
import { AdoptionApplicationFirebaseDao } from '../../dao/adoptionApplication.firebase.dao';
import { AdoptionContractFirebaseDao } from '../../dao/adoptionContract.firebase.dao';
import { EnclosureFirebaseDao } from '../../dao/enclosure.firebase.dao';
import { ShelterFirebaseDao } from '../../dao/shelter.firebase.dao';
import { ItemFirebaseDao } from '../../dao/item.firebase.dao';

export interface Item {
  id?: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    public itemDao: ItemFirebaseDao,
    public adopterDao: AdopterFirebaseDao,
    public adoptionApplicationDao: AdoptionApplicationFirebaseDao,
    public adoptionContractDao: AdoptionContractFirebaseDao,
    public animalDao: AnimalFirebaseDao,
    public animalHealthDao: AnimalHealthFirebaseDao,
    public enclosureDao: EnclosureFirebaseDao,
    public shelterDao: ShelterFirebaseDao
  ) {}

  async hasData(): Promise<boolean> {
    const adoptersSnapshot = await this.adopterDao.empty();
    const adoptionApplicationSnapshot = await this.adoptionApplicationDao.empty();
    const adoptionContractSnapshot = await this.adoptionContractDao.empty();
    const animalHealthSnapshot = await this.animalHealthDao.empty();
    const animalSnapshot = await this.animalDao.empty();
    const enclosureSnapshot = await this.enclosureDao.empty();
    const shelterSnapshot = await this.shelterDao.empty();
    return (
      !adoptersSnapshot ||
      !adoptionApplicationSnapshot ||
      !adoptionContractSnapshot ||
      !animalHealthSnapshot ||
      !animalSnapshot ||
      !enclosureSnapshot ||
      !shelterSnapshot
    );
  }

  loadData() {
    this.itemDao.save({ id: 'ABC', value: 'Hello World' });
  }
}
