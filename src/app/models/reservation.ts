export interface Reservation {
    readonly _id: number;
    readonly userId: number;
    readonly totalPrive: number;
    readonly start: Date;
    readonly stop: Date;
    readonly status: string;
}
