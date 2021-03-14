const Meeting = require('../models/meetingSchema')

exports.addMeeting = async(req, res)=>{
    try {
        const meeting = new Meeting(req.body)
       const newMeeting = await meeting.save()
       return res.status(201).json({
        newMeeting
    });
    } catch (error) {
    console.log(error);
    return res.status(400).json({
    error: "Not able to save themeeting in the db"
    });   
    }
}

exports.getAllMeetings= async(req, res)=>{
try {
    const meetings = await Meeting.find()
    res.status(200).json({
        meetings
    })
} catch (error) {
    
}

}