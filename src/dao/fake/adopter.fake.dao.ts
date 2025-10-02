import { Injectable } from '@angular/core';
import { Adopter } from '../../model/adopter';
import { FakeDataDao } from '../../shared/fake-data-dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class AdopterFakeDataDao extends FakeDataDao<Adopter> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.adopters);
  }
}
