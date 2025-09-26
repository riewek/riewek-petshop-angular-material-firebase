import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopterDetail } from './adopter-detail';

describe('AdopterDetail', () => {
  let component: AdopterDetail;
  let fixture: ComponentFixture<AdopterDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdopterDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdopterDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
