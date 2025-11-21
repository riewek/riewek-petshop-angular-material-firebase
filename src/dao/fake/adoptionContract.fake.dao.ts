import { Injectable } from '@angular/core';
import { AdoptionContract } from '../../model/adoptionContract';
import { FakeDao } from '../../shared/fake.dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class AdoptionContractFakeDao extends FakeDao<AdoptionContract> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.adoptionContracts);
  }
}
