import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationsComponent} from './reservations.component';
import {ReservationsService} from './reservations.service';
import {MatListModule} from '@angular/material/list';

@NgModule({
    declarations: [
        ReservationsComponent
    ],
    imports: [
        CommonModule,
        MatListModule
    ],
    providers: [ReservationsService]
})
export class ReservationsModule {
}
