import { ITEM_DAO } from '../item.dao';
import { ANIMAL_DAO } from '../animal.dao';
import { ADOPTER_DAO } from '../adopter.dao';
import { ADOPTION_APPLICATION_DAO } from '../adoptionApplication.dao';
import { ADOPTION_CONTRACT_DAO } from '../adoptionContract.dao';
import { ANIMAL_HEALTH_DAO } from '../animalHealth.dao';
import { ENCLOSURE_DAO } from '../enclosure.dao';
import { SHELTER_DAO } from '../shelter.dao';

import { ItemFirebaseDao } from './item.firebase.dao';
import { AnimalFirebaseDao } from './animal.firebase.dao';
import { AdopterFirebaseDao } from './adopter.firebase.dao';
import { AdoptionApplicationFirebaseDao } from './adoptionApplication.firebase.dao';
import { AdoptionContractFirebaseDao } from './adoptionContract.firebase.dao';
import { AnimalHealthFirebaseDao } from './animalHealth.firebase.dao';
import { EnclosureFirebaseDao } from './enclosure.firebase.dao';
import { ShelterFirebaseDao } from './shelter.firebase.dao';

export const firebaseDaoProviders = [
  { provide: ITEM_DAO, useClass: ItemFirebaseDao },
  { provide: ANIMAL_DAO, useClass: AnimalFirebaseDao },
  { provide: ADOPTER_DAO, useClass: AdopterFirebaseDao },
  { provide: ADOPTION_APPLICATION_DAO, useClass: AdoptionApplicationFirebaseDao },
  { provide: ADOPTION_CONTRACT_DAO, useClass: AdoptionContractFirebaseDao },
  { provide: ANIMAL_HEALTH_DAO, useClass: AnimalHealthFirebaseDao },
  { provide: ENCLOSURE_DAO, useClass: EnclosureFirebaseDao },
  { provide: SHELTER_DAO, useClass: ShelterFirebaseDao },
];
