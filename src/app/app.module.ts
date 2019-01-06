import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersModule} from './features/users/users.module';
import {EquipmentsModule} from './features/equipments/equipments.module';
import {LoginComponent} from './components/login/login.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
    MAT_DIALOG_DEFAULT_OPTIONS,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        UsersModule,
        EquipmentsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule

    ],
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
