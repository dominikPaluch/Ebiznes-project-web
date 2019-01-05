import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private authService: AuthService,
                private breakpointObserver: BreakpointObserver) {
        this.authService.checkSession();
    }

    getUsername(): string {
        return localStorage.getItem('userName');
    }

    logout() {
        this.authService.logout();
    }

    isLoggedOn(): boolean {
        return this.authService.isLoggedOn();
    }

    login() {
        this.authService.login();
    }
}
