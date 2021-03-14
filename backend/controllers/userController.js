const User = require('../models/userModel')
const CryptoJS = require('crypto-js')
const {getAccessToken, listCalendars} = require('../utils/calendarFunctions')

exports.addUser = (req, res) => {
    const user = new User(req.body)
    user.save((err, feedback) => {
        if(err){
            console.log(err);
            return res.status(400).json({
                error: "Not able to save the user in the db"
            });
        }
        return res.json({
            user
        });
    })
}

exports.getUser = (req, res, next) => {
    User.findOne({email: req.body.email})
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

exports.isUserRegistered = (req, res) => {
    if(req.user != null){
        if(req.user.githubId.length > 0)
        return res.status(200).json(req.user)
        return res.status(400).json({error: "Not registered"})
    }
    return res.status(404).json({error: "User not present"})    
}

exports.registerUser = (req, res) => {
    User.findOneAndUpdate({email: req.body.email}, {"$set": {githubId: req.body.githubId, proficientLanguages: req.body.proficientLanguages}}, {runValidators: true})
    .exec((err, items) => {
        if(!items){
            return res.status(404).json({
                error: "No user found"
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

exports.updateProficientLanguage = (req, res) => {
    User.findOneAndUpdate({email: req.body.email}, {proficientLanguages: req.body.proficientLanguages}, {runValidators: true})
    .exec((err, items) => {
        if(!items){
            return res.status(404).json({
                error: "No user found"
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

exports.getAllCalendars = (req, res) => {
    if(req.token != null){
        let decryptedRT = CryptoJS.AES.decrypt(req.token.refreshToken, process.env.CRYPTO_SECRET).toString(CryptoJS.enc.Utf8)
        getAccessToken(decryptedRT).then((accessToken)=>{
            listCalendars(accessToken).then((calList)=> {
                return res.status(200).json({calendarList: calList})
            })
        })
    }
    else{
        return res.status(404).json({error: 'Token Not Found'})
    }
}

exports.updateCheckCalendars = (req, res) => {
    User.findOneAndUpdate({email: req.body.email}, {calendarsCheck: req.body.calendarsCheck}, {runValidators: true})
    .exec((err, items) => {
        if(!items){
            return res.status(404).json({
                error: "No user found"
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


