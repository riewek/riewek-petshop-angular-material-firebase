import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionApplicationDetail } from './adoption-application-detail';

describe('AdoptionApplicationDetail', () => {
  let component: AdoptionApplicationDetail;
  let fixture: ComponentFixture<AdoptionApplicationDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionApplicationDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionApplicationDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
