import {Component} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {EquipmentsService} from './equipments.service';

@Component({
    selector: 'app-equipments',
    templateUrl: './equipments.component.html',
    styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent {

    constructor(public authService: AuthService,
                private eqService: EquipmentsService) {
        this.eqService.getEquipments().subscribe(results => console.log(results));
    }

    getToken() {
        this.authService.getAccessToken();
        this.eqService.getEquipments().subscribe(results => console.log(results));
    }


}
