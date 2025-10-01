import { InjectionToken } from '@angular/core';
import { Item } from '../app/services/firebase.service';
import { Dao } from '../shared/dao';

export const ITEM_DAO = new InjectionToken<Dao<Item>>('ItemDao');

export interface ItemDao extends Dao<Item> {}
