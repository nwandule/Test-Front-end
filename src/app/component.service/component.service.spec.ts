import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentService } from './component.service';

describe('ComponentService', () => {
  let component: ComponentService;
  let fixture: ComponentFixture<ComponentService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
