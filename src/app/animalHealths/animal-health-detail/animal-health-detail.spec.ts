import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHealthDetail } from './animal-health-detail';

describe('AnimalHealthDetail', () => {
  let component: AnimalHealthDetail;
  let fixture: ComponentFixture<AnimalHealthDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalHealthDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalHealthDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
