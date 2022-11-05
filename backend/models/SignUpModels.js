const mongoose = require('mongoose')

const singUpTemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    occupation: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('memberTable', singUpTemplate)