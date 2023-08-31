import * as mongoose from 'mongoose'

export const goalSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String
})
