import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdoptionContracts } from './adoptionContracts';
import { PetShopDao } from '../../dao/petShop.dao';
import { daoMock, translatePipeMock } from '../../shared/test.util';

describe('AdoptionContracts', () => {
  let component: AdoptionContracts;
  let fixture: ComponentFixture<AdoptionContracts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionContracts, RouterTestingModule, translatePipeMock()],
      providers: [
        {
          provide: PetShopDao,
          useValue: {
            adoptionContractDao: daoMock(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptionContracts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
