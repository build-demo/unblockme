const mongoose = require('mongoose')

var meetingSchema = new mongoose.Schema({
    name: String,
    issueId: String,
    description: String,
    githubRepo: {
        type: String
    },
})

module.exports = new mongoose.model('Meeting', meetingSchema)