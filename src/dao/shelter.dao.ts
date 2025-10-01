import { InjectionToken } from '@angular/core';
import { Shelter } from '../model/shelter';
import { Dao } from '../shared/dao';

export const SHELTER_DAO = new InjectionToken<Dao<Shelter>>('ShelterDao');

export interface ShelterDao extends Dao<Shelter> {}
