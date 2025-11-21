import { Injectable } from '@angular/core';
import { Animal } from '../../model/animal';
import { FakeDao } from '../../shared/fake.dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalFakeDao extends FakeDao<Animal> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.animals);
  }
}
