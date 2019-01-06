import {Component, OnInit, ViewChild} from '@angular/core';
import {EquipmentsService} from './equipments.service';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Equipment} from '../../models/equipment';
import {AuthService} from '../../auth/auth.service';
import {CreateEquipmentModalComponent} from './components/create-equipment-modal/create-equipment-modal.component';
import {UpdateEquipmentModalComponent} from './components/update-equipment-modal/update-equipment-modal.component';


@Component({
    selector: 'app-equipments',
    templateUrl: './equipments.component.html',
    styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {

    equipments: Equipment[];
    displayedColumns: string[] = ['name', 'price', 'status', 'action'];
    dataSource;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private equipmentService: EquipmentsService,
                public dialog: MatDialog,
                private auth: AuthService) {
    }

    ngOnInit() {
        this.getEquipments();
    }

    openDialogToAddNewEquipment(): void {
        const dialogRef = this.dialog.open(CreateEquipmentModalComponent, {
            width: '250px',
            disableClose: true
        });

        dialogRef.afterClosed().pipe(
        ).subscribe(result => {
            if (!!result) {
                console.log(result.value);
                this.createEquipment(result);
            }
        });
    }

    openDialogToEditEquipment(equipment: Equipment): void {
        const dialogRef = this.dialog.open(UpdateEquipmentModalComponent, {
            width: '250px',
            data: equipment,
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(updatedEquipment => {
            if (!!updatedEquipment) {
                this.updateEquipment(updatedEquipment);
            }
        });
    }

    private createEquipment(result) {
        this.equipmentService.createEquipment({
            name: result.value.name,
            price: result.value.price,
            status: 'ok'
        }).subscribe(() => this.getEquipments());
    }

    private getEquipments() {
        this.equipmentService.getEquipments().subscribe(results => {
            this.equipments = results;
            this.dataSource = new MatTableDataSource<Equipment>(this.equipments);
            this.dataSource.paginator = this.paginator;
        });
    }

    removeEquipment(id: string) {
        this.equipmentService.deleteEquipment(id)
            .subscribe(() => this.getEquipments());
    }

    updateEquipment(result) {
        this.equipmentService.updateEquipment({
            name: result.value.name,
            price: result.value.price,
            status: result.value.status,
            _id: result.value._id
        })
            .subscribe(() => this.getEquipments());
    }

    isAdmin(): boolean {
        return this.auth.isAdmin();
    }
}



