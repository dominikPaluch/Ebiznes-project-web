import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipmentsComponent} from './equipments.component';
import {EquipmentsService} from './equipments.service';
import {MatPaginatorModule, MatTableModule} from '@angular/material';

@NgModule({
    declarations: [EquipmentsComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule
    ],
    providers: [EquipmentsService]
})
export class EquipmentsModule {
}
