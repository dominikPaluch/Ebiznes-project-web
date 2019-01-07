import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EquipmentsComponent} from './features/equipments/equipments.component';
import {UsersComponent} from './features/users/users.component';
import {AppComponent} from './app.component';
import {MyAccountComponent} from './features/my-account/my-account.component';
import {ReservationsComponent} from './features/reservations/reservations.component';
import {PaymentsComponent} from './components/payments/payments.component';

const routes: Routes = [
    {
        path: '*',
        component: AppComponent
    },
    {
        component: EquipmentsComponent,
        path: 'equipments'
    },
    {
        component: UsersComponent,
        path: 'users'
    },
    {
        component: MyAccountComponent,
        path: 'my'
    },
    {
        component: ReservationsComponent,
        path: 'reservations'
    },
    {
        component: PaymentsComponent,
        path: 'payment'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
