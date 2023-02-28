import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSinglePatientComponent } from './view-single-patient.component';

describe('ViewSinglePatientComponent', () => {
  let component: ViewSinglePatientComponent;
  let fixture: ComponentFixture<ViewSinglePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSinglePatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSinglePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
