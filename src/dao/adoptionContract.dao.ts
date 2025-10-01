import { InjectionToken } from '@angular/core';
import { AdoptionContract } from '../model/adoptionContract';
import { Dao } from '../shared/dao';

export const ADOPTION_CONTRACT_DAO = new InjectionToken<Dao<AdoptionContract>>(
  'AdoptionContractDao'
);

export interface AdoptionContractDao extends Dao<AdoptionContract> {}
