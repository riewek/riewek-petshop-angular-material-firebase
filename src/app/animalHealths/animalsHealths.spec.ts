import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalHealths } from './animalHealths';
import { PetShopDao } from '../../dao/petShop.dao';
import { daoMock, translatePipeMock } from '../../shared/test.util';

describe('AnimalHealths', () => {
  let component: AnimalHealths;
  let fixture: ComponentFixture<AnimalHealths>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalHealths, RouterTestingModule, translatePipeMock()],
      providers: [
        {
          provide: PetShopDao,
          useValue: {
            animalHealthDao: daoMock(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalHealths);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
