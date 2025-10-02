import { Injectable } from '@angular/core';
import { Shelter } from '../../model/shelter';
import { FakeDataDao } from '../../shared/fake-data-dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class ShelterFakeDataDao extends FakeDataDao<Shelter> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.shelters);
  }
}
