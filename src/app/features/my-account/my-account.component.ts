import {Component, OnInit} from '@angular/core';
import {Reservation} from '../../models/reservation';
import {AuthService} from '../../auth/auth.service';
import {ReservationsService} from '../reservations/reservations.service';

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.component.html',
    styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

    reservations: Reservation[] = [];

    constructor(private auth: AuthService,
                private reservationsService: ReservationsService) {
    }

    getUsername(): string {
        return localStorage.getItem('userName');
    }

    ngOnInit() {
        this.getMyReservations();
    }

    private getMyReservations() {
        return this.reservationsService.getReservations().subscribe(res => {
            this.reservations = res.filter(reservation => reservation.userMail === localStorage.getItem('userName'));
        });
    }

    cancel(reservation: Reservation) {
        this.reservationsService.updateReservation({
            ...reservation,
            status: 'anulowano'
        }).subscribe(() => {
            this.getMyReservations();
        });
    }

    isDoRealizacjiStatus(status: string) {
        return status === 'do realizacji';
    }

    getSerialNumbers(reservation: Reservation) {
        return reservation.equipments.map(equipment => equipment.serialNumber);
    }

}
