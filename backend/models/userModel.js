const mongoose = require('mongoose')
// const meetingSchema = require('./meetingSchema')
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
    calendar: String,
    javascript : Boolean,
    ruby: Boolean,
    python: Boolean,
    issueId: String,
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
    githubRefreshToken: String,
    githubEmail: String,
    bio: String,
    refreshToken: String,
    proficientLanguages: [{
        type: String
    }],
   
}, {timestamps: true})

module.exports = new mongoose.model('User', userSchema)