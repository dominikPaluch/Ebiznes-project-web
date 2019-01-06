import {Component, Inject, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Equipment} from '../../../../models/equipment';

@Component({
    selector: 'app-complete-reservation-modal',
    templateUrl: './complete-reservation-modal.component.html',
    styleUrls: ['./complete-reservation-modal.component.scss']
})
export class CompleteReservationModalComponent {

    reservationForm: FormGroup;
    disabled;

    constructor(public dialogRef: MatDialogRef<CompleteReservationModalComponent>,
                private fb: FormBuilder,
                @Optional() @Inject(MAT_DIALOG_DATA) public data) {
        this.createForm();
        console.log(this.reservationForm.value);
    }

    cancel(): void {
        this.dialogRef.close();
    }

    private createForm() {
        this.reservationForm = this.fb.group({
            date: [this.data.date, [Validators.required]],
            cart: [this.data.cart, [Validators.required]],
            selectedTime: [this.data.selectedHourOfReservation, [Validators.required]]
        });
    }

    getSum(): number {
        let result = 0;
        this.data.cart.forEach((equipment: Equipment) => {
            result += equipment.price * this.reservationForm.get('selectedTime').value;
        });
        return result;
    }
}
