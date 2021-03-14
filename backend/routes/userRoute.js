const express = require('express')
const router = express.Router()

const {addUser, getUser, isUserRegistered, registerUser,  updateProficientLanguage, getAllCalendars, updateCheckCalendars} = require('../controllers/userController')
const {findToken, isAuthorized} = require('../controllers/tokenController')

router.post('/addUser', addUser)
router.post('/isRegistered', getUser, isUserRegistered)
router.post('/registerUser', registerUser)
router.post('/updateProficientLanguages', updateProficientLanguage)
router.post('/getAllCalendars', findToken ,getAllCalendars)
router.post('/updateCheckCalendars', updateCheckCalendars)
module.exports = router