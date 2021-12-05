import { Schema } from "mongoose";

export const orderSchema = new Schema({
        address: { type: String, required: true },
        price: { type: String, required: true },
    },
    {
        timestamps: true
    }
);
