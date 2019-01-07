import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyAccountComponent} from './my-account.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        MyAccountComponent
    ],
    imports: [
        CommonModule,
        MatCardModule
    ]
})
export class MyAccountModule {
}
