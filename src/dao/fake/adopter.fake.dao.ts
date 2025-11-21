import { Injectable } from '@angular/core';
import { Adopter } from '../../model/adopter';
import { FakeDao } from '../../shared/fake.dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class AdopterFakeDao extends FakeDao<Adopter> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.adopters);
  }
}
