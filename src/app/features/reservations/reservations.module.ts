import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReservationsComponent} from './reservations.component';
import {ReservationsService} from './reservations.service';

@NgModule({
    declarations: [
        ReservationsComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [ReservationsService]
})
export class ReservationsModule {
}
