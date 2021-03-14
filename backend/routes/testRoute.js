const express = require('express')
const router = express.Router()
const Token = require ('../models/tokenModel')
const CryptoJS = require('crypto-js')

const {getAccessToken, listCalendars} = require('../utils/calendarFunctions')

router.post('/getCalendar', (req, res, next) => {
    Token.findOne({email:req.body.email})
    .exec((err, items) => {
        if(err)
        return res.status(400).json({error:err})
        req.token = items
        next()
    })
}, (req, res) => {
    if(req.token != null){
        let decryptedRT = CryptoJS.AES.decrypt(req.token.refreshToken, process.env.CRYPTO_SECRET).toString(CryptoJS.enc.Utf8)
        getAccessToken(decryptedRT).then((accessToken)=>{
            console.log(accessToken)
            return listCalendars(accessToken)
        }).then((calList)=>{
            return res.status(200).json({list: calList})
        })
    }
    else{
        return res.status(404).json({error: 'Token Not Found'})
    }
})

module.exports = router