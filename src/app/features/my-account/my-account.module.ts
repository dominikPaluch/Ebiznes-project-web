import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyAccountComponent} from './my-account.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatListModule} from '@angular/material';

@NgModule({
    declarations: [
        MyAccountComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule,
        MatButtonModule
    ]
})
export class MyAccountModule {
}
