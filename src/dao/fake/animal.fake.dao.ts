import { Injectable } from '@angular/core';
import { Animal } from '../../model/animal';
import { FakeDataDao } from '../../shared/fake-data-dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalFakeDataDao extends FakeDataDao<Animal> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.findAllAnimals());
  }
}
