import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'app-create-equipment-modal',
    templateUrl: './create-equipment-modal.component.html',
    styleUrls: ['./create-equipment-modal.component.scss']
})
export class CreateEquipmentModalComponent {

    constructor(
        public dialogRef: MatDialogRef<CreateEquipmentModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
