import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalDetail } from './animal-detail';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PetShopDao } from '../../../dao/petShop.dao';
import { daoMock, translatePipeMock } from '../../../shared/test.util';

describe('AnimalDetail', () => {
  let component: AnimalDetail;
  let fixture: ComponentFixture<AnimalDetail>;
  let paramMap$: BehaviorSubject<ParamMap>;

  beforeEach(async () => {
    paramMap$ = new BehaviorSubject(convertToParamMap({ id: '123' }));
    await TestBed.configureTestingModule({
      imports: [AnimalDetail, translatePipeMock()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: paramMap$.asObservable(),
          },
        },
        {
          provide: PetShopDao,
          useValue: {
            animalDao: daoMock(),
            enclosureDao: daoMock(),
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AnimalDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an edit page', () => {
    paramMap$.next(convertToParamMap({ id: '123' }));
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.id()).toBe('123');
    expect(component.mode()).toBe('edit');
  });

  it('should create an create page', () => {
    paramMap$.next(convertToParamMap({ id: 'create' }));
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.id()).toBe('');
    expect(component.mode()).toBe('create');
  });
});
