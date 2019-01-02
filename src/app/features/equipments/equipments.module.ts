import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsComponent } from './equipments.component';
import {EquipmentsService} from './equipments.service';

@NgModule({
  declarations: [EquipmentsComponent],
  imports: [
    CommonModule
  ],
  providers: [EquipmentsService]
})
export class EquipmentsModule { }
