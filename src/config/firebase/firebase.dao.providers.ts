import { ITEM_DAO } from '../.././dao/item.dao';
import { ANIMAL_DAO } from '../.././dao/animal.dao';
import { ADOPTER_DAO } from '../.././dao/adopter.dao';
import { ADOPTION_APPLICATION_DAO } from '../.././dao/adoptionApplication.dao';
import { ADOPTION_CONTRACT_DAO } from '../.././dao/adoptionContract.dao';
import { ANIMAL_HEALTH_DAO } from '../.././dao/animalHealth.dao';
import { ENCLOSURE_DAO } from '../.././dao/enclosure.dao';
import { SHELTER_DAO } from '../.././dao/shelter.dao';

import { ItemFirebaseDao } from '../.././dao/item.firebase.dao';
import { AnimalFirebaseDao } from '../.././dao/animal.firebase.dao';
import { AdopterFirebaseDao } from '../.././dao/adopter.firebase.dao';
import { AdoptionApplicationFirebaseDao } from '../.././dao/adoptionApplication.firebase.dao';
import { AdoptionContractFirebaseDao } from '../.././dao/adoptionContract.firebase.dao';
import { AnimalHealthFirebaseDao } from '../.././dao/animalHealth.firebase.dao';
import { EnclosureFirebaseDao } from '../.././dao/enclosure.firebase.dao';
import { ShelterFirebaseDao } from '../.././dao/shelter.firebase.dao';

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
