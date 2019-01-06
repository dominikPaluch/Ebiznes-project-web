import {Component, OnInit, ViewChild} from '@angular/core';
import {EquipmentsService} from './equipments.service';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Equipment} from '../../models/equipment';
import {AuthService} from '../../auth/auth.service';
import {CreateEquipmentModalComponent} from './components/create-equipment-modal/create-equipment-modal.component';


export interface DialogData {
    animal: string;
    name: string;
}


@Component({
    selector: 'app-equipments',
    templateUrl: './equipments.component.html',
    styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {

    equipments: Equipment[];
    displayedColumns: string[] = ['name', 'price', 'status', 'action'];
    dataSource;

    @ViewChild(MatPaginator) paginator2: MatPaginator;

    constructor(private equipmentService: EquipmentsService,
                public dialog: MatDialog,
                private auth: AuthService) {
    }

    ngOnInit() {
        this.getEquipments();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(CreateEquipmentModalComponent, {
            width: '250px',
            data: {},
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (!!result) {
                this.createEquipmenet(result);
            }
        });
    }

    private createEquipmenet(result) {
        this.equipmentService.postEquipment({
            name: result.value.name,
            price: result.value.price,
            status: 'ok'
        });
    }

    private getEquipments() {
        this.equipmentService.getEquipments().subscribe(results => {
            this.equipments = results;
            console.log(results);
            this.dataSource = new MatTableDataSource<Equipment>(this.equipments);
            this.dataSource.paginator = this.paginator2;
        });
    }

    removeEquipment(id: string) {
        console.log(id);
        this.equipmentService.deleteEquipment(id)
            .subscribe((res) => {
                console.log(res);
                this.getEquipments();
            });
    }

    editEquipment(id: string) {

    }

    isAdmin(): boolean {
        return this.auth.isAdmin();
    }
}



