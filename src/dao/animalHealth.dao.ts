import { InjectionToken } from '@angular/core';
import { AnimalHealth } from '../model/animalHealth';
import { Dao } from '../shared/dao';

export const ANIMAL_HEALTH_DAO = new InjectionToken<Dao<AnimalHealth>>('AnimalHealthDao');

export interface AnimalHealthDao extends Dao<AnimalHealth> {}
