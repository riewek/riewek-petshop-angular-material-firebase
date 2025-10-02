import { Inject, Injectable } from '@angular/core';
import { ANIMAL_DAO, AnimalDao } from './animal.dao';
import { ADOPTER_DAO, AdopterDao } from './adopter.dao';
import { ADOPTION_APPLICATION_DAO, AdoptionApplicationDao } from './adoptionApplication.dao';
import { ADOPTION_CONTRACT_DAO, AdoptionContractDao } from './adoptionContract.dao';
import { ENCLOSURE_DAO, EnclosureDao } from './enclosure.dao';
import { ANIMAL_HEALTH_DAO, AnimalHealthDao } from './animalHealth.dao';
import { SHELTER_DAO, ShelterDao } from './shelter.dao';
import { FakeDataService } from './fake/fake.data.service';
import { ITEM_DAO, ItemDao } from './item.dao';

@Injectable({
  providedIn: 'root',
})
export class PetShopDao {
  constructor(
    @Inject(ITEM_DAO) public itemDao: ItemDao,
    @Inject(ANIMAL_DAO) public animalDao: AnimalDao,
    @Inject(ADOPTER_DAO) public adopterDao: AdopterDao,
    @Inject(ADOPTION_APPLICATION_DAO) public adoptionApplicationDao: AdoptionApplicationDao,
    @Inject(ADOPTION_CONTRACT_DAO) public adoptionContractDao: AdoptionContractDao,
    @Inject(ENCLOSURE_DAO) public enclosureDao: EnclosureDao,
    @Inject(ANIMAL_HEALTH_DAO) public animalHealthDao: AnimalHealthDao,
    @Inject(SHELTER_DAO) public shelterDao: ShelterDao,
    public fakeDataService: FakeDataService
  ) {}

  async someEmpty(): Promise<boolean> {
    const snapshots = [
      await this.animalDao.empty(),
      await this.adopterDao.empty(),
      await this.adoptionApplicationDao.empty(),
      await this.adoptionContractDao.empty(),
      await this.enclosureDao.empty(),
      await this.animalHealthDao.empty(),
      await this.shelterDao.empty(),
    ];
    return snapshots.some((s) => s);
  }

  loadData(): void {
    for (const adopter of this.fakeDataService.adopters) this.adopterDao.save(adopter);
    for (const adoptionApplication of this.fakeDataService.adoptionApplications)
      this.adoptionApplicationDao.save(adoptionApplication);
    for (const adoptionContract of this.fakeDataService.adoptionContracts)
      this.adoptionContractDao.save(adoptionContract);
    for (const animalHealth of this.fakeDataService.animalHealths)
      this.animalHealthDao.save(animalHealth);
    for (const animal of this.fakeDataService.animals) this.animalDao.save(animal);
    for (const enclosure of this.fakeDataService.enclosures) this.enclosureDao.save(enclosure);
    for (const shelter of this.fakeDataService.shelters) this.shelterDao.save(shelter);
  }
}
