import { Document } from "mongoose";

export interface IAuth extends Document{
    readonly email: string;
    readonly password: string;
}