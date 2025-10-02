import { Injectable } from '@angular/core';
import { AnimalFirebaseDao } from '../../dao/firebase/animal.firebase.dao';
import { AnimalHealthFirebaseDao } from '../../dao/firebase/animalHealth.firebase.dao';
import { AdopterFirebaseDao } from '../../dao/firebase/adopter.firebase.dao';
import { AdoptionApplicationFirebaseDao } from '../../dao/firebase/adoptionApplication.firebase.dao';
import { AdoptionContractFirebaseDao } from '../../dao/firebase/adoptionContract.firebase.dao';
import { EnclosureFirebaseDao } from '../../dao/firebase/enclosure.firebase.dao';
import { ShelterFirebaseDao } from '../../dao/firebase/shelter.firebase.dao';
import { ItemFirebaseDao } from '../../dao/firebase/item.firebase.dao';

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
