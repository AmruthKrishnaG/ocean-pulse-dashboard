import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselRating } from './vessel-rating';

describe('VesselRating', () => {
  let component: VesselRating;
  let fixture: ComponentFixture<VesselRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VesselRating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselRating);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
