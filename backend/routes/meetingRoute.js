const express = require('express')
const router = express.Router()

const {addMeeting, getAllMeetings} = require('../controllers/meetingController')

router.post('/', addMeeting)
router.get('/', getAllMeetings)


module.exports = router