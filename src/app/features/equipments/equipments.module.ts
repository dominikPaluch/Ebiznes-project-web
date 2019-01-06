import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipmentsComponent} from './equipments.component';
import {EquipmentsService} from './equipments.service';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateEquipmentModalComponent} from './components/create-equipment-modal/create-equipment-modal.component';
import {UpdateEquipmentModalComponent} from './components/update-equipment-modal/update-equipment-modal.component';

@NgModule({
    declarations: [
        EquipmentsComponent,
        CreateEquipmentModalComponent,
        UpdateEquipmentModalComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [EquipmentsService],
    entryComponents: [
        CreateEquipmentModalComponent,
        UpdateEquipmentModalComponent
    ]
})
export class EquipmentsModule {
}
