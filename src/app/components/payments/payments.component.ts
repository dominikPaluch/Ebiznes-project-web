import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {

    constructor(private router: Router) {
    }

    payment() {
        this.router.navigate(['equipments']);
    }

}
