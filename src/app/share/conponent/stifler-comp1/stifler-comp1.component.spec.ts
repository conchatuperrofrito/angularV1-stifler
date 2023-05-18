import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StiflerComp1Component } from './stifler-comp1.component';

describe('StiflerComp1Component', () => {
  let component: StiflerComp1Component;
  let fixture: ComponentFixture<StiflerComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StiflerComp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StiflerComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
