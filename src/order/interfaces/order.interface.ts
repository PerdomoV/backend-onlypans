import { Document } from 'mongoose';

export interface IPedido extends Document{
    readonly address: string;
    readonly cost: number;
    readonly state: string;
    readonly user_id: string;
}