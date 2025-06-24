import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMaintenance } from './smart-maintenance';

describe('SmartMaintenance', () => {
  let component: SmartMaintenance;
  let fixture: ComponentFixture<SmartMaintenance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartMaintenance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartMaintenance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
