import {Injectable} from '@angular/core';
import {AuthOptions, WebAuth} from 'auth0-js';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    protected _auth0Client: WebAuth;
    private _accessToken: string;
    private _idToken: string;
    private _properties: AuthOptions;
    private _authResult: Object;

    private helper = new JwtHelperService();

    constructor(private router: Router) {
        this.setProperties();
    }

    private setProperties() {
        this._properties = {
            clientID: 'IzmXDhprSpclNJaHxMnRAJazovW24w6g',
            domain: 'dominikp.eu.auth0.com',
            responseType: 'token id_token',
            audience: 'http://localhost:3000',
            redirectUri: 'http://localhost:4200/equipments',
            scope: 'openid profile'
        };
        this._auth0Client = new WebAuth({...this._properties});
    }

    public login(): void {
        this._auth0Client.authorize();
    }

    public isTokenExpired(): boolean {
        return this.helper.isTokenExpired(localStorage.getItem('accessToken'));
    }

    public decodeToken() {
        return this.helper.decodeToken(localStorage.getItem('accessToken'));
    }

    public getTokenExpirationDate() {
        return this.helper.getTokenExpirationDate(localStorage.getItem('accessToken'));
    }

    public checkSession(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this._auth0Client.checkSession(this._properties, async (error, authResult) => {
                if (error && error.error !== 'login_required') {
                    console.log('jakis inny błąd');
                    return reject(error);
                } else if (error) {
                    console.log(error, 'Redirect to equipments page');
                    // redirect to login page ;
                    this.router.navigate(['equipments']);
                    this.handleAuthentication();
                    return resolve(false);
                }
                if (!this.isLoggedOn()) {
                    console.log('a teraz tu ');
                    this._setSession(authResult);
                    this._authResult = authResult;
                    return resolve(true);
                }
                // }
            });
        });
    }

    public isLoggedOn(): boolean {
        // Check whether the current time is past the
        // Access Token's expiry time
        // return this._accessToken != null;
        return !this.isTokenExpired();
    }

    private handleAuthentication(): void {
        this._auth0Client.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                console.log('in handleAuthentication', authResult.idTokenPayload.name);
                this._setSession(authResult);
            } else if (err) {
                console.log(err);
            }
        });
    }

    private _setSession(authResult): void {
        if (!!authResult) {
            this._accessToken = authResult.accessToken;
            this._idToken = authResult.idToken;
            localStorage.setItem('accessToken', authResult.accessToken);
            localStorage.setItem('userName', authResult.idTokenPayload.name);
            this.router.navigate(['equipments']);
        }
    }

    public isAdmin(): boolean {
        if (this._accessToken) {
            const helper = new JwtHelperService();
            const decodedToken = helper.decodeToken(this._accessToken);
            if (decodedToken['http://localhost:3000/roles'].indexOf('admin') > -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public getProfile(): Object {
        return this._authResult;
    }

    public getAccessToken(): String {
        // return this._accessToken;
        return localStorage.getItem('accessToken');
    }

    public logout(): void {
        delete this._accessToken;
        delete this._idToken;
        localStorage.clear();
        this.router.navigate(['equipments']);
    }
}
