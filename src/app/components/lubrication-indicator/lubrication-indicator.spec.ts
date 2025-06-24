import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubricationIndicator } from './lubrication-indicator';

describe('LubricationIndicator', () => {
  let component: LubricationIndicator;
  let fixture: ComponentFixture<LubricationIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LubricationIndicator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LubricationIndicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
