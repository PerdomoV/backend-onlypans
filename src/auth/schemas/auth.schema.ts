import { Schema } from "mongoose";

export const AuthSchema = new Schema({
    
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, default: 'cliente'},
        address: { type: String }
    },
    {
        timestamps: true
    }
);