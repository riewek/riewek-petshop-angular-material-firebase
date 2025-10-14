import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Demo } from './demo';
jest.mock('.././services/firebase.service', () => ({
  FirebaseService: jest.fn().mockImplementation(() => ({
    getItems: jest.fn().mockReturnValue({ subscribe: () => {} }),
  })),
}));
import { FirebaseService } from '.././services/firebase.service';
import { PetShopDao } from '../../dao/petShop.dao';
import { daoMock, translatePipeMock } from '../../shared/test.util';

xdescribe('Demo', () => {
  let component: Demo;
  let fixture: ComponentFixture<Demo>;
  let firebaseServiceMock: jest.Mocked<FirebaseService>;

  beforeEach(async () => {
    // Service-Mock mit Jest
    firebaseServiceMock = {
      getItems: jest.fn().mockReturnValue(of([{ id: '1', value: 'Test Item' }])),
    } as unknown as jest.Mocked<FirebaseService>;

    await TestBed.configureTestingModule({
      imports: [Demo, translatePipeMock()],
      providers: [
        provideZonelessChangeDetection(),
        { provide: FirebaseService, useValue: firebaseServiceMock },
        {
          provide: PetShopDao,
          useValue: {
            itemDao: daoMock(),
            someEmpty: () => of(true),
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Demo);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should update title signal and render it', () => {
    const fixture = TestBed.createComponent(Demo);
    const app = fixture.componentInstance;
    app.title.set('My Test Shop');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, My Test Shop');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Demo);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, riewek-petshop-angular-material-firebase'
    );
  });

  it('should call FirebaseService.getItems()', () => {
    const fixture = TestBed.createComponent(Demo);
    fixture.detectChanges();
    //expect(firebaseServiceMock.getItems).toHaveBeenCalled();
  });
});
