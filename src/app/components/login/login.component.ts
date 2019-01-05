import {Component} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(public authService: AuthService) {
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

    login() {
        return this.authService.login();
    }


}
