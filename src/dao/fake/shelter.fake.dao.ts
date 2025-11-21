import { Injectable } from '@angular/core';
import { Shelter } from '../../model/shelter';
import { FakeDao } from '../../shared/fake.dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class ShelterFakeDao extends FakeDao<Shelter> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.shelters);
  }
}
