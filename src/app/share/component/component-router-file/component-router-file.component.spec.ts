import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRouterFileComponent } from './component-router-file.component';

describe('ComponentRouterFileComponent', () => {
  let component: ComponentRouterFileComponent;
  let fixture: ComponentFixture<ComponentRouterFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRouterFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentRouterFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
