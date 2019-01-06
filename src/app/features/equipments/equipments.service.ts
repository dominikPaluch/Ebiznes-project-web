import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';
import {Observable, throwError} from 'rxjs';
import {Equipment} from '../../models/equipment';
import {environment} from '../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EquipmentsService {

    API_URL = environment.API_URL;

    constructor(private http: HttpClient, private auth: AuthService) {
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
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

    public postEquipment(equipment: Equipment): Observable<Equipment> {
        console.log(equipment);
        return this.http.post<Equipment>('/api/equipments', equipment, this._authHeader())
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
