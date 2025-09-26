import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosureDetail } from './enclosure-detail';

describe('EnclosureDetail', () => {
  let component: EnclosureDetail;
  let fixture: ComponentFixture<EnclosureDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnclosureDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnclosureDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
