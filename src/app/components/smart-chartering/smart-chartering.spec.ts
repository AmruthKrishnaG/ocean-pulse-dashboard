import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartChartering } from './smart-chartering';

describe('SmartChartering', () => {
  let component: SmartChartering;
  let fixture: ComponentFixture<SmartChartering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartChartering]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartChartering);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
