import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-set-date-modal',
    templateUrl: './set-date-modal.component.html',
    styleUrls: ['./set-date-modal.component.scss']
})
export class SetDateModalComponent {

    dateForm: FormGroup;
    date: string;

    constructor(public dialogRef: MatDialogRef<SetDateModalComponent>,
                private fb: FormBuilder) {
        this.createForm();
    }

    cancel(): void {
        this.dialogRef.close();
    }

    private createForm() {
        this.dateForm = this.fb.group({
            date: [this.date, [Validators.required]]
        });
    }

}
