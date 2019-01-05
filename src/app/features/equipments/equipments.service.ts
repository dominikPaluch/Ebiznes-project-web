import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';
import {Observable} from 'rxjs';
import {Equipment} from '../../models/equipment';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EquipmentsService {

    API_URL = environment.API_URL;

    constructor(private http: HttpClient, private auth: AuthService) {
    }

    // creates header
    private _authHeader(): Object {
        return {
            headers: new HttpHeaders({'authorization': `Bearer ${this.auth.getAccessToken()}`})
        };
    }

    public getEquipments(): Observable<Equipment[]> {
        // console.log(this.auth.getAccessToken());
        return this.http.get<Equipment[]>(`${this.API_URL}/equipments`);
    }

    public postEquipment(equipment: Equipment): Observable<Equipment> {
        return this.http.post<Equipment>('/api/equipments', equipment, this._authHeader());
    }

}
