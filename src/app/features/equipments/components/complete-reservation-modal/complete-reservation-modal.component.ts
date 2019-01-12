import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Equipment} from '../../../../models/equipment';
import {Router} from '@angular/router';

@Component({
    selector: 'app-complete-reservation-modal',
    templateUrl: './complete-reservation-modal.component.html',
    styleUrls: ['./complete-reservation-modal.component.scss']
})
export class CompleteReservationModalComponent implements OnInit {

    reservationForm: FormGroup;
    disabled;

    constructor(public dialogRef: MatDialogRef<CompleteReservationModalComponent>,
                private router: Router,
                private fb: FormBuilder,
                @Optional() @Inject(MAT_DIALOG_DATA) public data) {
    }

    ngOnInit(): void {
        this.createForm();
    }

    cancel(): void {
        this.dialogRef.close();
    }

    payLater() {
        this.dialogRef.close();
    }

    private createForm() {
        this.reservationForm = this.fb.group({
            date: [this.data.date, [Validators.required]],
            cart: [this.data.cart, [Validators.required]],
            selectedTime: [this.data.selectedHourOfReservation, [Validators.required]],
            sum: !!this.data.selectedHourOfReservation ? this.getSum() : 0
        });
    }

    getSum(): number {
        let result = 0;
        this.data.cart.forEach((equipment: Equipment) => {
            result += equipment.price * this.data.selectedHourOfReservation;
        });
        return result;
    }
}
