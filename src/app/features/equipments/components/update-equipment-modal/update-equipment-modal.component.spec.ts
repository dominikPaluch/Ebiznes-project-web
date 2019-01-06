import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEquipmentModalComponent } from './update-equipment-modal.component';

describe('UpdateEquipmentModalComponent', () => {
  let component: UpdateEquipmentModalComponent;
  let fixture: ComponentFixture<UpdateEquipmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEquipmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEquipmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
