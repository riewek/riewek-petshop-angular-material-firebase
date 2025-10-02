import { Injectable } from '@angular/core';
import { AdoptionApplication } from '../../model/adoptionApplication';
import { FakeDataDao } from '../../shared/fake-data-dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class AdoptionApplicationFakeDataDao extends FakeDataDao<AdoptionApplication> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.adoptionApplications);
  }
}
