import { InjectionToken } from '@angular/core';
import { AdoptionApplication } from '../model/adoptionApplication';
import { Dao } from '../shared/dao';

export const ADOPTION_APPLICATION_DAO = new InjectionToken<Dao<AdoptionApplication>>(
  'AdoptionApplicationDao'
);

export interface AdoptionApplicationDao extends Dao<AdoptionApplication> {}
