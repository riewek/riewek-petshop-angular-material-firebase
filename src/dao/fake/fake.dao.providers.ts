import { ITEM_DAO } from '../item.dao';
import { ANIMAL_DAO } from '../animal.dao';
import { ADOPTER_DAO } from '../adopter.dao';
import { ADOPTION_APPLICATION_DAO } from '../adoptionApplication.dao';
import { ADOPTION_CONTRACT_DAO } from '../adoptionContract.dao';
import { ANIMAL_HEALTH_DAO } from '../animalHealth.dao';
import { ENCLOSURE_DAO } from '../enclosure.dao';
import { SHELTER_DAO } from '../shelter.dao';

import { ItemFakeDao } from './item.fake.dao';
import { AnimalFakeDao } from './animal.fake.dao';
import { AdopterFakeDao } from './adopter.fake.dao';
import { AdoptionApplicationFakeDao } from './adoptionApplication.fake.dao';
import { AdoptionContractFakeDao } from './adoptionContract.fake.dao';
import { AnimalHealthFakeDao } from './animalHealth.fake.dao';
import { EnclosureFakeDao } from './enclosure.fake.dao';
import { ShelterFakeDao } from './shelter.fake.dao';

export const fakeDaoProviders = [
  { provide: ITEM_DAO, useClass: ItemFakeDao },
  { provide: ANIMAL_DAO, useClass: AnimalFakeDao },
  { provide: ADOPTER_DAO, useClass: AdopterFakeDao },
  { provide: ADOPTION_APPLICATION_DAO, useClass: AdoptionApplicationFakeDao },
  { provide: ADOPTION_CONTRACT_DAO, useClass: AdoptionContractFakeDao },
  { provide: ANIMAL_HEALTH_DAO, useClass: AnimalHealthFakeDao },
  { provide: ENCLOSURE_DAO, useClass: EnclosureFakeDao },
  { provide: SHELTER_DAO, useClass: ShelterFakeDao },
];
