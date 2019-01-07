import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationsComponent} from './reservations.component';
import {ReservationsService} from './reservations.service';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material';

@NgModule({
    declarations: [
        ReservationsComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
        MatButtonModule
    ],
    providers: [ReservationsService]
})
export class ReservationsModule {
}
