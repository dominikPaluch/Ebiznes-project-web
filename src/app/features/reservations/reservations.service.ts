import {Injectable} from '@angular/core';
import {Reservation} from '../../models/reservation';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class ReservationsService {


    API_URL = environment.API_URL;

    constructor(private http: HttpClient, private auth: AuthService) {
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; please try again later.');
    }

    private _authHeader(): Object {
        return {
            headers: new HttpHeaders({
                'authorization': `Bearer ${this.auth.getAccessToken()}`,
                'Content-Type': 'application/json'
            }),
            responseType: 'text'
        };
    }

    public getReservations(): Observable<Reservation[]> {
        return this.http.get<Reservation[]>(`${this.API_URL}/reservations`);
    }

    public deleteReservation(id: string): Observable<{}> {
        return this.http.delete(`/api/reservations/${id}`, this._authHeader())
            .pipe(
                catchError(this.handleError)
            );
    }
}
