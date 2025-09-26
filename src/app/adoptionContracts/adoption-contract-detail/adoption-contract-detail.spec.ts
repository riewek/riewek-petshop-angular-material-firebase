import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionContractDetail } from './adoption-contract-detail';

describe('AdoptionContractDetail', () => {
  let component: AdoptionContractDetail;
  let fixture: ComponentFixture<AdoptionContractDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionContractDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionContractDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
