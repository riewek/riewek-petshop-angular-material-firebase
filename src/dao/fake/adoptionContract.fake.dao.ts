import { Injectable } from '@angular/core';
import { AdoptionContract } from '../../model/adoptionContract';
import { FakeDataDao } from '../../shared/fake-data-dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class AdoptionContractFakeDataDao extends FakeDataDao<AdoptionContract> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.adoptionContracts);
  }
}
