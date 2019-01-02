import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

    constructor(private auth: AuthService) {

    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        console.log(!!this.auth.getAccessToken() ? this.auth.getAccessToken() : 'nie ma');
    }

}
