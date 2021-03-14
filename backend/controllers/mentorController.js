const User = require('../models/userModel')
const CryptoJS = require('crypto-js')
const {getAccessToken, getFreeBusy, setCalendarInvite} = require('../utils/calendarFunctions')

exports.getProficientMentor = (req, res) => {
    if(req.body.proficientLanguages != null){
        User.find({proficientLanguages: { $elemMatch: { $in : req.body.proficientLanguages} } })
        .exec((err, items) => {
            if(!items){
                return res.status(404).json({
                    error: "No Mentor Found"
                })
            }
            if(err){
                return res.status(400).json({
                    error: err
                })
            }
            return res.status(200).json(items)
        })
    }
    else{
        return res.status(400).json({error: "No language provided"})
    }
}

exports.getMentor = (req, res, next) => {
    User.findOne({email: req.body.mentorEmail})
    .exec((err, item) => {
        if(err){
            return res.status(404).json({
                error: "No user found"
            })
        }
        req.user = item
        next()
    })
}

exports.getMentorBusyTime = (req, res) => {
    if(req.token != null){
        let decryptedRT = CryptoJS.AES.decrypt(req.token.refreshToken, process.env.CRYPTO_SECRET).toString(CryptoJS.enc.Utf8)
        getAccessToken(decryptedRT).then((accessToken)=>{
            let user = req.user
            let calList = user.calendarsCheck
            getFreeBusy(accessToken, calList).then((freeBusy)=>{
                return res.status(200).json({busyTimes: freeBusy})
            }) 
        })
    }
    else{
        return res.status(404).json({error: 'Token Not Found'})
    }
}

exports.arrangeMeeting = (req, res) => {
    if(req.token != null){
        let decryptedRT = CryptoJS.AES.decrypt(req.token.refreshToken, process.env.CRYPTO_SECRET).toString(CryptoJS.enc.Utf8)
        getAccessToken(decryptedRT).then((accessToken)=>{
            setCalendarInvite(accessToken, req.body.email, req.body.mentorEmail, req.body.startTime, req.body.endTime, req.body.summary, req.body.description).then((result)=>{
                return res.status(200).json({invite: result})
            })
        })
    }
    else{
        return res.status(404).json({error: 'Token Not Found'})
    }
}

exports.updateMeetings = (req, res, next) => {
    var meetInfo = {
        with:req.body.mentorEmail,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        description: req.body.description
    }
    User.findOneAndUpdate({email: req.body.email}, {"$push": {"meetings" : meetInfo}})
    .exec((err, item) => {
        if(err){
            return res.status(404).json({
                error: "No user found"
            })
        }
        let myEmail = req.body.email
        req.body.email = req.body.mentorEmail,
        req.body.mentorEmail = myEmail
        next()
    })
    
}