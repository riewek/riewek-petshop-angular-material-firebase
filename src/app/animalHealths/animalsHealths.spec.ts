import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalHealths } from './animalHealths';

describe('AnimalHealths', () => {
  let component: AnimalHealths;
  let fixture: ComponentFixture<AnimalHealths>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalHealths],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalHealths);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
