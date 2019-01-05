import {Component} from '@angular/core';
import {EquipmentsService} from './equipments.service';

@Component({
    selector: 'app-equipments',
    templateUrl: './equipments.component.html',
    styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent {

    constructor(private eqService: EquipmentsService) {
        console.log('eq comp');
        this.eqService.getEquipments().subscribe(results => console.log(results));
    }


}
