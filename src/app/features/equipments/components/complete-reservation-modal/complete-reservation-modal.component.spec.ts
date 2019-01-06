import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteReservationModalComponent } from './complete-reservation-modal.component';

describe('CompleteReservationModalComponent', () => {
  let component: CompleteReservationModalComponent;
  let fixture: ComponentFixture<CompleteReservationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteReservationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteReservationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
