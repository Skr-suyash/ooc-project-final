const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    "name": String,
    "email": String,
    "password": String,
    "reset_token": String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;