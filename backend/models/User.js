const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: String,
    userName: String,
    password: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;