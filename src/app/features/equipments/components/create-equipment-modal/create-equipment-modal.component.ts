import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-create-equipment-modal',
    templateUrl: './create-equipment-modal.component.html',
    styleUrls: ['./create-equipment-modal.component.scss']
})
export class CreateEquipmentModalComponent {

    createEquipmentForm: FormGroup;

    constructor(public dialogRef: MatDialogRef<CreateEquipmentModalComponent>,
                private fb: FormBuilder) {
        this.createForm();
    }

    cancel(): void {
        this.dialogRef.close();
    }

    private createForm() {
        this.createEquipmentForm = this.fb.group({
            name: ['', [Validators.required]],
            price: ['', [Validators.required]],
            serialNumber: ['', [Validators.required]],
        });
    }
}
