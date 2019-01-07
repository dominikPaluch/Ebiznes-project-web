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

    setReservationToWydano(reservation: Reservation) {
        this.reservationsService.updateReservation({
            ...reservation,
            status: 'wydano'
        }).subscribe(() => {
            this.getReservations();
        });
    }

    setReservationToZakonczono(reservation: Reservation) {
        this.reservationsService.updateReservation({
            ...reservation,
            status: 'zakończono'
        }).subscribe(() => {
            this.getReservations();
        });
    }

    isStatusWydano(reservation: Reservation) {
        if (!!reservation) {
            return reservation.status === 'wydano';
        }
    }

    isStatusZakonczono(reservation: Reservation) {
        if (!!reservation) {
            return reservation.status === 'zakończono';
        }
    }

    getSerialNumbers(reservation: Reservation) {
        return reservation.equipments.map(equipment => equipment.serialNumber);
    }

}
