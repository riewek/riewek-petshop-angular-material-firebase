import { Injectable } from '@angular/core';
import { Enclosure } from '../../model/enclosure';
import { FakeDataDao } from '../../shared/fake-data-dao';
import { FakeDataService } from './fake.data.service';

@Injectable({
  providedIn: 'root',
})
export class EnclosureFakeDataDao extends FakeDataDao<Enclosure> {
  constructor(private fakeDataService: FakeDataService) {
    super(fakeDataService.enclosures);
  }
}
