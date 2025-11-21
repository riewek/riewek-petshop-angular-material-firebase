import { Injectable } from '@angular/core';
import { AnimalHealth } from '../../model/animalHealth';
import { FakeDao } from '../../shared/fake.dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalHealthFakeDao extends FakeDao<AnimalHealth> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.animalHealths);
  }
}
