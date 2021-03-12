const mongoose = require('mongoose')

var meetingSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    with: {
        type: String,
        required: true,
    },
    githubRepo: {
        type: String
    },
})

module.exports = meetingSchema