import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEquipmentModalComponent } from './create-equipment-modal.component';

describe('CreateEquipmentModalComponent', () => {
  let component: CreateEquipmentModalComponent;
  let fixture: ComponentFixture<CreateEquipmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEquipmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEquipmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
