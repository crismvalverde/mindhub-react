const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    googleId: String,
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    country: String
})

module.exports = User = mongoose.model("User", UserSchema);