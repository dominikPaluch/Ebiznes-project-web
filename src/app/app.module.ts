import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersModule} from './features/users/users.module';
import {EquipmentsModule} from './features/equipments/equipments.module';
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
import {MyAccountModule} from './features/my-account/my-account.module';
import {ReservationsModule} from './features/reservations/reservations.module';
import { PaymentsComponent } from './components/payments/payments.component';

@NgModule({
    declarations: [
        AppComponent,
        PaymentsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        UsersModule,
        EquipmentsModule,
        ReservationsModule,
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
        MatInputModule,
        MyAccountModule

    ],
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
