import { InjectionToken } from '@angular/core';
import { Adopter } from '../model/adopter';
import { Dao } from '../shared/dao';

export const ADOPTER_DAO = new InjectionToken<Dao<Adopter>>('AdopterDao');

export interface AdopterDao extends Dao<Adopter> {}
