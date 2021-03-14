const { google } = require('googleapis')
const { OAuth2 } = google.auth


const oAuth2Client = new OAuth2(
    process.env.clientID,
    process.env.clientSecret
  )


exports.getPrimaryCalendar = async(token)=> {
    try {
        console.log(token, 'this token');
        await oAuth2Client.setCredentials({
        refresh_token: token,
      })
      const calendar = await google.calendar({ version: 'v3', auth: oAuth2Client })
     const res = await calendar.calendarList.get({calendarId: 'primary'})
     return res.data
    } catch (error) {
        console.log(error);
        return error
    }
}

// 