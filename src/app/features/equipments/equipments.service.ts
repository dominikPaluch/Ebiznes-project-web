import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';
import {Observable, throwError} from 'rxjs';
import {Equipment} from '../../models/equipment';
import {environment} from '../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Reservation} from '../../models/reservation';

@Injectable({
    providedIn: 'root'
})
export class EquipmentsService {

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

    public getEquipments(): Observable<Equipment[]> {
        return this.http.get<Equipment[]>(`${this.API_URL}/equipments`);
    }

    public createEquipment(equipment: Equipment): Observable<Equipment> {
        return this.http.post<Equipment>(`/api/equipments`, equipment, this._authHeader())
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );
    }

    public createReservation(reservation: Reservation): Observable<Reservation> {
        return this.http.post<Reservation>(`/api/reservations`, reservation, this._authHeader())
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );
    }

    public updateEquipment(equipment: Equipment): Observable<Equipment> {
        return this.http.put<Equipment>(`/api/equipments/${equipment._id}`, equipment, this._authHeader())
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );
    }

    public deleteEquipment(id: string): Observable<{}> {
        return this.http.delete(`/api/equipments/${id}`, this._authHeader())
            .pipe(
                catchError(this.handleError)
            );
    }

}
