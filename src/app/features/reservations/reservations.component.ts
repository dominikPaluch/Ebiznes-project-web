import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {ReservationsService} from './reservations.service';
import {Reservation} from '../../models/reservation';

@Component({
    selector: 'app-reservations',
    templateUrl: './reservations.component.html',
    styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

    reservations: Reservation[];


    constructor(private auth: AuthService,
                private reservationsService: ReservationsService) {
    }

    ngOnInit() {
        this.getReservations();
    }

    private getReservations() {
        return this.reservationsService.getReservations().subscribe(res => {
            this.reservations = res;
        });
    }

    remove(reservationId: string) {
        this.reservationsService.deleteReservation(reservationId).subscribe(() => {
            this.getReservations();
        });
    }

}
