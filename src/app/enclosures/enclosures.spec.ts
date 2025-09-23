import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enclosures } from './enclosures.js';

describe('Enclosure', () => {
  let component: Enclosures;
  let fixture: ComponentFixture<Enclosures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enclosures],
    }).compileComponents();

    fixture = TestBed.createComponent(Enclosures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
