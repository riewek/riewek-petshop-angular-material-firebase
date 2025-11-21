import { InjectionToken } from '@angular/core';
import { Dao } from '../shared/dao';
import { Item } from '../model/item';

export const ITEM_DAO = new InjectionToken<Dao<Item>>('ItemDao');

export interface ItemDao extends Dao<Item> {}
