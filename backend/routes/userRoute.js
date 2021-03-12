const express = require('express')
const router = express.Router()

const {addUser, getUser, isUserRegistered, registerUser} = require('../controllers/userController')

router.post('/addUser', addUser)
router.post('/isRegistered', getUser, isUserRegistered)
router.post('/registerUser', registerUser)

module.exports = router