import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmenthistoryComponent } from './patient-history.component';

describe('AppointmenthistoryComponent', () => {
  let component: AppointmenthistoryComponent;
  let fixture: ComponentFixture<AppointmenthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmenthistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmenthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
