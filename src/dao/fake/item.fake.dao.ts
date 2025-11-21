import { Injectable } from '@angular/core';
import { FakeDao } from '../../shared/fake.dao';
import { FakeDataService } from './fake.data.service';
import { Item } from '../../model/item';

@Injectable({
  providedIn: 'root',
})
export class ItemFakeDao extends FakeDao<Item> {
  constructor(private fakeDataService: FakeDataService) {
    super([{ id: '123', value: '[fakeDao]' }]);
  }
}
