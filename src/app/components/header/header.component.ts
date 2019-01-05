import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    isAuthenticated() {
        return this.authService.isLoggedOn();
    }

    login() {
        return this.authService.login();
    }

    logout() {
        return this.authService.logout();
    }

    getProfile() {
        return this.authService.getProfile();
    }

    check() {
        console.log(this.authService.isTokenExpired());
    }

    decodeToken() {
        console.log(this.authService.decodeToken());
    }

    getToken2() {
        console.log(this.authService.getAccessToken());
    }

    getTokenExpirationDate() {
        console.log(this.authService.getTokenExpirationDate());
    }

    getNickname(): string {
        return localStorage.getItem('userName');
    }


}
