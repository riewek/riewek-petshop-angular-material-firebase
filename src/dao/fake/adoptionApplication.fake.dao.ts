import { Injectable } from '@angular/core';
import { AdoptionApplication } from '../../model/adoptionApplication';
import { FakeDao } from '../../shared/fake.dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class AdoptionApplicationFakeDao extends FakeDao<AdoptionApplication> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.adoptionApplications);
  }
}
