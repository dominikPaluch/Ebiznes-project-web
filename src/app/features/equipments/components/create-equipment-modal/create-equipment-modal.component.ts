import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EquipmentsService} from '../../equipments.service';


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

    createEquipmentForm: FormGroup;

    constructor(public dialogRef: MatDialogRef<CreateEquipmentModalComponent>,
                private fb: FormBuilder,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.createForm();
    }

    cancel(): void {
        this.dialogRef.close();
    }

    private createForm() {
        this.createEquipmentForm = this.fb.group({
            name: ['', [Validators.required]],
            price: ['', [Validators.required]]
        });
    }

}
