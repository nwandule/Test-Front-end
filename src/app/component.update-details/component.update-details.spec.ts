import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUpdateDetails } from './component.update-details';

describe('ComponentUpdateDetails', () => {
  let component: ComponentUpdateDetails;
  let fixture: ComponentFixture<ComponentUpdateDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentUpdateDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentUpdateDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
