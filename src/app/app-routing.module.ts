import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EquipmentsComponent} from './features/equipments/equipments.component';
import {UsersComponent} from './features/users/users.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
    {
        path: '*',
        component: AppComponent
    },
    {
        component: LoginComponent,
        path: 'login'
    },
    {
        component: EquipmentsComponent,
        path: 'equipments'
    },
    {
        component: UsersComponent,
        path: 'users'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
