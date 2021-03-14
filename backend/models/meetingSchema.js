const mongoose = require('mongoose')

var meetingSchema = new mongoose.Schema({
    with: {
        type: String,
        required: true,
    },
    startTime : {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = meetingSchema