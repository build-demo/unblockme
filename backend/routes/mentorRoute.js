const express = require('express')
const router = express.Router()

const {getProficientMentor, getMentorBusyTime, getMentor, updateMeetings, arrangeMeeting} = require('../controllers/mentorController')
const {findToken, findMentorToken, isAuthorized} = require('../controllers/tokenController')


router.post('/getMentor', getProficientMentor)
router.post('/getMentorBusyTime', findMentorToken, getMentor, getMentorBusyTime)
router.post('/arrangeMeeting', updateMeetings, updateMeetings, findToken, arrangeMeeting)

module.exports = router