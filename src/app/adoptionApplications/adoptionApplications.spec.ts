import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdoptionApplications } from './adoptionApplications';
import { PetShopDao } from '../../dao/petShop.dao';
import { daoMock, translatePipeMock } from '../../shared/test.util';

describe('AdoptionApplications', () => {
  let component: AdoptionApplications;
  let fixture: ComponentFixture<AdoptionApplications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionApplications, RouterTestingModule, translatePipeMock()],
      providers: [
        {
          provide: PetShopDao,
          useValue: {
            adoptionApplicationDao: daoMock(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptionApplications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
