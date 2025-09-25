import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionApplications } from './adoptionApplications';

describe('AdoptionApplications', () => {
  let component: AdoptionApplications;
  let fixture: ComponentFixture<AdoptionApplications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionApplications],
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptionApplications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
