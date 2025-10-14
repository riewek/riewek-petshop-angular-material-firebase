import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Adopters } from './adopters';
import { PetShopDao } from '../../dao/petShop.dao';
import { daoMock, translatePipeMock } from '../../shared/test.util';

describe('Adopters', () => {
  let component: Adopters;
  let fixture: ComponentFixture<Adopters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adopters, RouterTestingModule, translatePipeMock()],
      providers: [
        {
          provide: PetShopDao,
          useValue: {
            adopterDao: daoMock(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Adopters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
