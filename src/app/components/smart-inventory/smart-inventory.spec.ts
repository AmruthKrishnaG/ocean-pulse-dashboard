import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartInventory } from './smart-inventory';

describe('SmartInventory', () => {
  let component: SmartInventory;
  let fixture: ComponentFixture<SmartInventory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartInventory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartInventory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
