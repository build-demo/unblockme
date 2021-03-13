const mongoose = require('mongoose')
const meetingSchema = require('./meetingSchema')
const verifyGithubId = require('../validators/githubIdValidator')

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    profilepicture: {
        type: String,
        trim: true,
    },
    githubId: {
        type: String,
        trim: true,
        validate: {
            // isAsync: true,
            validator: (value) => {
                return verifyGithubId(value)
            },
            msg: "Github Id is not valid"
        },
        default: ""
    },
    proficientLanguages: [{
        type: String
    }],
    meetings : [
        meetingSchema   
    ]
}, {timestamps: true})

module.exports = new mongoose.model('User', userSchema)