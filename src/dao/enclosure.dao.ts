import { InjectionToken } from '@angular/core';
import { Enclosure } from '../model/enclosure';
import { Dao } from '../shared/dao';

export const ENCLOSURE_DAO = new InjectionToken<Dao<Enclosure>>('EnclosureDao');

export interface EnclosureDao extends Dao<Enclosure> {}
