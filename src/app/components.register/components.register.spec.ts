import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsRegister } from './components.register';

describe('ComponentsRegister', () => {
  let component: ComponentsRegister;
  let fixture: ComponentFixture<ComponentsRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentsRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
