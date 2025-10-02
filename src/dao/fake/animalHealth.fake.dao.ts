import { Injectable } from '@angular/core';
import { AnimalHealth } from '../../model/animalHealth';
import { FakeDataDao } from '../../shared/fake-data-dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalHealthFakeDataDao extends FakeDataDao<AnimalHealth> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.findAllAnimalHealths());
  }
}
