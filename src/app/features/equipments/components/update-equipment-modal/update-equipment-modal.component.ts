import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Equipment} from '../../../../models/equipment';

@Component({
    selector: 'app-update-equipment-modal',
    templateUrl: './update-equipment-modal.component.html',
    styleUrls: ['./update-equipment-modal.component.scss']
})
export class UpdateEquipmentModalComponent {

    updateEquipmentForm: FormGroup;

    constructor(public dialogRef: MatDialogRef<UpdateEquipmentModalComponent>,
                private fb: FormBuilder,
                @Inject(MAT_DIALOG_DATA) public data: Equipment) {
        this.createForm();
    }

    cancel(): void {
        this.dialogRef.close();
    }

    private createForm() {
        this.updateEquipmentForm = this.fb.group({
            _id: [this.data._id],
            name: [this.data.name, [Validators.required]],
            price: [this.data.price, [Validators.required]],
            status: [this.data.status, [Validators.required]]
        });
    }

}
