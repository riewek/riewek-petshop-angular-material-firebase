import { TestBed } from '@angular/core/testing';
jest.mock('@angular/fire/compat/firestore', () => ({
  AngularFirestore: jest.fn(),
}));
import { FirebaseService, Item } from './firebase.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';

const valueChangesMock = jest.fn();
const collectionMock = jest.fn().mockImplementation(() => ({
  valueChanges: valueChangesMock,
}));

xdescribe('FirebaseService', () => {
  let service: FirebaseService;
  let afsMock: Partial<AngularFirestore>;

  beforeEach(() => {
    afsMock = {
      collection: collectionMock,
    };
    TestBed.configureTestingModule({
      providers: [FirebaseService, { provide: AngularFirestore, useValue: afsMock }],
    });
    service = TestBed.inject(FirebaseService);
    valueChangesMock.mockReturnValue(of([{ id: '1', value: 'Mock Item' } as Item]));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return items', (done) => {
    service.itemDao.findAllAsObservable().subscribe((items) => {
      expect(items).toEqual([{ id: '1', value: 'Mock Item' }]);
      done();
    });
  });

  it('should call AngularFirestore.collection with "items"', () => {
    service.itemDao.findAllAsObservable().subscribe();
    expect(collectionMock).toHaveBeenCalledWith('items');
    expect(valueChangesMock).toHaveBeenCalledWith({ idField: 'id' });
  });
});
