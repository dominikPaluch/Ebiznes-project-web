import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {EquipmentsService} from '../../features/equipments/equipments.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(public authService: AuthService,
                private eqService: EquipmentsService) {
        // this.eqService.getEquipments().subscribe(results => console.log(results));
    }

    ngOnInit() {
    }

    // ngAfterViewInit(): void {
    //     console.log(!!this.authService.getAccessToken() ? this.authService.getAccessToken() : 'nie ma');
    // }

}
