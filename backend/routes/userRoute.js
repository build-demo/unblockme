const express = require('express')
const router = express.Router()

const { addUser, updateUser, getUser, isUserRegistered, registerUser, getAllUsers} = require('../controllers/userController')


router.post('/', addUser)
router.post('/isRegistered', getUser, isUserRegistered)
router.post('/registerUser', registerUser)

router.get('/', getAllUsers)
router.put('/', updateUser)

module.exports = router