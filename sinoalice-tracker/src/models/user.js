const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: String,
    userName: String,
    password: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
