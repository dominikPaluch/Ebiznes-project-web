import {Equipment} from './equipment';

export interface Reservation {
    _id?: string;
    userMail: string;
    totalPrice: number;
    start: Date;
    stop: Date;
    status: string;
    equipments: Equipment[];
}
