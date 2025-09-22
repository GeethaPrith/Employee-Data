import { Signal, WritableSignal } from '@angular/core'; // Adjust the import path as needed

export interface Card {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    image: string;
    likes?:number;
}