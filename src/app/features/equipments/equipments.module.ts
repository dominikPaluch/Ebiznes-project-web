import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipmentsComponent} from './equipments.component';
import {EquipmentsService} from './equipments.service';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateEquipmentModalComponent} from './components/create-equipment-modal/create-equipment-modal.component';
import {UpdateEquipmentModalComponent} from './components/update-equipment-modal/update-equipment-modal.component';
import {SetDateModalComponent} from './components/set-date-modal/set-date-modal.component';
import {CompleteReservationModalComponent} from './components/complete-reservation-modal/complete-reservation-modal.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {NgxGalleryModule} from 'ngx-gallery';

@NgModule({
    declarations: [
        EquipmentsComponent,
        CreateEquipmentModalComponent,
        UpdateEquipmentModalComponent,
        SetDateModalComponent,
        CompleteReservationModalComponent,
        GalleryComponent
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
        MatButtonModule,
        MatOptionModule,
        MatSelectModule,
        MatCardModule,
        NgxGalleryModule
    ],
    providers: [EquipmentsService],
    entryComponents: [
        CreateEquipmentModalComponent,
        UpdateEquipmentModalComponent,
        SetDateModalComponent,
        CompleteReservationModalComponent
    ]
})
export class EquipmentsModule {
}
