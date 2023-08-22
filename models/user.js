const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, Request:true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    email : {type: String, required: true, unique: true},
    nic : {type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});


const User = mongoose.model('User', userSchema);

module.exports = User;