import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { App } from './app';
jest.mock('./services/firebase.service', () => ({
  FirebaseService: jest.fn().mockImplementation(() => ({
    getItems: jest.fn().mockReturnValue({ subscribe: () => {} }),
  })),
}));

import { FirebaseService } from './services/firebase.service';

xdescribe('App', () => {
  let firebaseServiceMock: jest.Mocked<FirebaseService>;

  beforeEach(async () => {
    firebaseServiceMock = {
      getItems: jest.fn().mockReturnValue(of([{ id: '1', value: 'Test Item' }])),
    } as unknown as jest.Mocked<FirebaseService>;

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        { provide: FirebaseService, useValue: firebaseServiceMock },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
