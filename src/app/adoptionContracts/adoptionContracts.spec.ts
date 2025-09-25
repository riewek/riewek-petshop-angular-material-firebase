import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionContracts } from './adoptionContracts';

describe('AdoptionContracts', () => {
  let component: AdoptionContracts;
  let fixture: ComponentFixture<AdoptionContracts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionContracts],
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptionContracts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
