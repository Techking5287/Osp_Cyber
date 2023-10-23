const mongoose = require('mongoose');
const moment = require('moment-timezone');

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Users', UserSchema)