import { Schema } from "mongoose";

export const productSchema = new Schema({
    
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: Number,
        urlToImage: { type: String, required: true },
    },
    {
        timestamps: true
    }
);
