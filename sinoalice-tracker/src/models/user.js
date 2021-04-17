import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: String,
    userName: String,
    password: String
});

export let User = mongoose.model("User", userSchema)