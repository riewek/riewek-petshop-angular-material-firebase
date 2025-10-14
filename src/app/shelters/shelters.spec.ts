import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Shelters } from './shelters';
import { PetShopDao } from '../../dao/petShop.dao';
import { daoMock, translatePipeMock } from '../../shared/test.util';

describe('Shelters', () => {
  let component: Shelters;
  let fixture: ComponentFixture<Shelters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shelters, RouterTestingModule, translatePipeMock()],
      providers: [
        {
          provide: PetShopDao,
          useValue: {
            shelterDao: daoMock(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Shelters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
