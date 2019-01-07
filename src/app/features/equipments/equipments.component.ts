import {Component, OnInit, ViewChild} from '@angular/core';
import {EquipmentsService} from './equipments.service';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Equipment} from '../../models/equipment';
import {AuthService} from '../../auth/auth.service';
import {CreateEquipmentModalComponent} from './components/create-equipment-modal/create-equipment-modal.component';
import {UpdateEquipmentModalComponent} from './components/update-equipment-modal/update-equipment-modal.component';
import {SetDateModalComponent} from './components/set-date-modal/set-date-modal.component';
import {CompleteReservationModalComponent} from './components/complete-reservation-modal/complete-reservation-modal.component';
import {FormBuilder} from '@angular/forms';
import {HOURS} from './hours';
import {Reservation} from '../../models/reservation';
import {Router} from '@angular/router';


@Component({
    selector: 'app-equipments',
    templateUrl: './equipments.component.html',
    styleUrls: ['./equipments.component.scss'],
})
export class EquipmentsComponent implements OnInit {

    equipments: Equipment[];
    displayedColumns: string[] = ['name', 'price', 'status', 'action'];
    dataSource;
    cartWithEquipments: Equipment[] = [];
    selectedDate: Date;
    hours = HOURS;
    selectedHourOfReservation = 1;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private equipmentService: EquipmentsService,
                public dialog: MatDialog,
                private fb: FormBuilder,
                private router: Router,
                private auth: AuthService) {
    }

    ngOnInit() {
        this.getEquipments();
    }

    openDialogToAddNewEquipment(): void {
        const dialogRef = this.dialog.open(CreateEquipmentModalComponent, {
            width: '250px',
            hasBackdrop: true
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
            hasBackdrop: true
        });

        dialogRef.afterClosed().pipe(
        ).subscribe((date: Date) => {
            if (!!date) {
                this.selectedDate = date;

                // todo get equipments which is free in this date
            }
        });
    }

    openDialogToEditEquipment(equipment: Equipment): void {
        const dialogRef = this.dialog.open(UpdateEquipmentModalComponent, {
            width: '250px',
            data: equipment,
            hasBackdrop: true
        });

        dialogRef.afterClosed().subscribe(updatedEquipment => {
            if (!!updatedEquipment) {
                this.updateEquipment(updatedEquipment);
            }
        });
    }

    openDialogToCompleteReservation(): void {
        const dialogRef = this.dialog.open(CompleteReservationModalComponent, {
            width: '450px',
            data: {
                date: this.selectedDate,
                cart: this.cartWithEquipments,
                selectedHourOfReservation: this.selectedHourOfReservation
            },
            hasBackdrop: true
        });

        dialogRef.afterClosed().subscribe(result => {
            if (!!result) {
                this.reserve(result);
            }
        });
    }

    selectHour(v: number) {
        this.selectedHourOfReservation = v;
    }

    reserve(result) {
        const endDate = new Date(result.date).setHours(new Date(result.date).getHours() + result.selectedTime);
        const reservation: Reservation = {
            start: result.date,
            userMail: localStorage.getItem('userName'),
            stop: new Date(endDate),
            totalPrice: result.sum,
            status: 'do realizacji',
            equipments: result.cart
        };

        this.equipmentService.createReservation(reservation).subscribe(() => {
            this.cartWithEquipments = [];
            this.selectedDate = null;
            this.router.navigate(['payment']);
        });

    }

    addToCart(eq: Equipment) {
        this.cartWithEquipments.push(eq);
        this.equipments.filter(equipment => equipment._id !== eq._id);
    }

    revert(id: string) {
        this.cartWithEquipments = this.cartWithEquipments.filter(eq => eq._id !== id);
    }

    isInCart(id: string): boolean {
        return !!this.cartWithEquipments.filter(equipment => equipment._id === id).length;
    }

    repair(equip: Equipment) {
        this.equipmentService.updateEquipment({
            ...equip,
            status: 'ok'
        }).subscribe(() => this.getEquipments());
    }

    getCartLength(): number {
        return this.cartWithEquipments.length;
    }

    private createEquipment(result) {
        this.equipmentService.createEquipment({
            name: result.value.name,
            price: result.value.price,
            status: 'ok',
            serialNumber: result.value.serialNumber
        }).subscribe(() => this.getEquipments());
    }

    private getEquipments() {
        this.equipmentService.getEquipments().subscribe(results => {
            this.equipments = results.filter(equip =>
                this.isAdmin() ? equip : equip.status !== 'zepsuty' && equip.status !== 'zepsuta');

            this.equipments.filter(equip => equip.status )

            this.dataSource = new MatTableDataSource<Equipment>(this.equipments);
            this.dataSource.paginator = this.paginator;
        });
    }

    isZepsuty(equip: Equipment) {
        return equip.status === 'zepsuty' || equip.status === 'zepsuta';
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
            serialNumber: result.value.serialNumber,
            _id: result.value._id
        }).subscribe(() => this.getEquipments());
    }

    isAdmin(): boolean {
        return this.auth.isAdmin();
    }

    isLoggedOn(): boolean {
        return this.auth.isLoggedOn();
    }
}




