import { InjectionToken } from '@angular/core';
import { Animal } from '../model/animal';
import { Dao } from '../shared/dao';

export const ANIMAL_DAO = new InjectionToken<Dao<Animal>>('AnimalDao');

export interface AnimalDao extends Dao<Animal> {}
