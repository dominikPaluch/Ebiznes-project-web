import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {EquipmentsService} from './equipments.service';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Equipment} from '../../models/equipment';
import {AuthService} from '../../auth/auth.service';
import {CreateEquipmentModalComponent} from './components/create-equipment-modal/create-equipment-modal.component';
import {UpdateEquipmentModalComponent} from './components/update-equipment-modal/update-equipment-modal.component';
import {SetDateModalComponent} from './components/set-date-modal/set-date-modal.component';


@Component({
    selector: 'app-equipments',
    templateUrl: './equipments.component.html',
    styleUrls: ['./equipments.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentsComponent implements OnInit {

    equipments: Equipment[];
    displayedColumns: string[] = ['name', 'price', 'status', 'action'];
    dataSource;
    cartWithEquipmentIds: string[] = [];
    selectedDate: Date;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private equipmentService: EquipmentsService,
                private cd: ChangeDetectorRef,
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
                this.createEquipment(result);
            }
        });
    }

    openDialogToSetDate(): void {
        const dialogRef = this.dialog.open(SetDateModalComponent, {
            width: '350px',
            disableClose: true
        });

        dialogRef.afterClosed().pipe(
        ).subscribe(date => {
            if (!!date) {
                this.selectedDate = date;
                console.log(this.selectedDate);
                // get equipments which is free in this date
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

    addToCart(id: string) {
        this.cartWithEquipmentIds.push(id);
        this.equipments.filter(eq => eq._id !== id);
    }

    revert(id: string) {
        this.cartWithEquipmentIds = this.cartWithEquipmentIds.filter(eqId => eqId !== id);
    }

    isInCart(id: string): boolean {
        return this.cartWithEquipmentIds.includes(id);
    }

    getCartLength(): number {
        return this.cartWithEquipmentIds.length;
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
        }).subscribe(() => this.getEquipments());
    }

    isAdmin(): boolean {
        return this.auth.isAdmin();
    }
}



