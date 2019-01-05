import {Component, OnInit, ViewChild} from '@angular/core';
import {EquipmentsService} from './equipments.service';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Equipment} from '../../models/equipment';
import {AuthService} from '../../auth/auth.service';
import {CreateEquipmentModalComponent} from '../../components/create-equipment-modal/create-equipment-modal.component';


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

    animal: string;
    name: string;

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
            data: {name: this.name, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }


    private getEquipments() {
        this.equipmentService.getEquipments().subscribe(results => {
            this.equipments = results;
            this.dataSource = new MatTableDataSource<Equipment>(this.equipments);
            this.dataSource.paginator = this.paginator2;
        });
    }

    isAdmin(): boolean {
        return this.auth.isAdmin();
    }
}



