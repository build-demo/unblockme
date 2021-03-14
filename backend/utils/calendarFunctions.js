const {google} = require('googleapis')
const { JsonWebTokenError } = require('jsonwebtoken')
const fetch = require('node-fetch')
const {clientID, clientSecret} = process.env

getAccessTokenAsync = (callback, refreshToken) => {
    let postUrl = "https://www.googleapis.com/oauth2/v4/token"
    return fetch(postUrl, {
        method: 'POST',
        body: JSON.stringify({
            client_id : clientID,
            client_secret: clientSecret,
            refresh_token: refreshToken,
            grant_type: 'refresh_token'
        }),
        headers: {'Content-Type': 'application/json'}
    }).then( (res) => res.json())
    .then( (json) => callback(json))
}

exports.getAccessToken = (refreshToken) => {
    const callback = result => {
        return result.access_token
    }
    return getAccessTokenAsync(callback, refreshToken)
}

listCalendarAsync = (callback, accessToken) => {
    let calendarListUrl = "https://www.googleapis.com/calendar/v3/users/me/calendarList"
    return fetch(calendarListUrl, {
        method: 'GET',
        headers: {
            'Authorization':'Bearer '+accessToken ,
            'Accept': 'application/json'
        }
    }).then( (res) => res.json())
    .then( (json) => callback(json))
}

exports.listCalendars = (accessToken) => {
    const callback = result => {
        return result.items
    }
    return listCalendarAsync(callback, accessToken)
}

getFreeBusyAsync = (callback, accessToken, formattedCalList) => {
    let freeBusyUrl = "https://www.googleapis.com/calendar/v3/freeBusy"
    var current_timestamp = new Date();
    let minTime = current_timestamp.toISOString();
    var maxTime = new Date(current_timestamp.getTime()+ 10*24*60*60000).toISOString();
    return fetch(freeBusyUrl, {
        method: 'POST',
        headers: {
            'Authorization':'Bearer '+accessToken ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "timeMax": maxTime,
            "timeMin": minTime,
            "items": formattedCalList
          }),
    }).then( (res) => res.json())
    .then( (json) => callback(json))
}

exports.getFreeBusy = (accessToken, calList) => {
    const callback = result => {
        let busyTimes = []
        try{
            let cals = result['calendars']
            for(let i in cals){
                let busy = cals[i]['busy']
                for(let j in busy){
                    busyTimes.push(busy[j])
                }
            }
        }
        catch(e){
            return {error: e}
        }
        return busyTimes
    }
    let formattedCalList = []
    for(let cal in calList)
    formattedCalList.push(
        {
            "id": (calList[cal].id) ? (calList[cal].id) : calList[cal]
        }
    )
    return getFreeBusyAsync(callback, accessToken, formattedCalList)
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

setCalendarInviteAsync = (callback, accessToken, email, toEmail, startTime, endTime, summary, description) => {
    let inviteLink = "https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all&conferenceDataVersion=1"
    return fetch(inviteLink, {
        method: 'POST',
        headers: {
            'Authorization':'Bearer '+accessToken ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "start": {
                "dateTime" : startTime
            },
            "end": {
                "dateTime": endTime
            },
            "attendees": [
                {
                    "email": email,
                    "self": true
                },
                {
                    "email": toEmail
                }
            ],
            "summary": summary,
            "description": description,
            "conferenceData": {
                "createRequest": {
                  "conferenceSolutionKey": {
                    "type": "hangoutsMeet"
                  },
                  "requestId": makeid(20)
                }
            },
        })
    }).then( (res) => res.json())
    .then( (json) => callback(json))
}

exports.setCalendarInvite = (accessToken, email, toEmail, startTime, endTime, summary, description) => {
    const callback = result => {
        console.log(result)
        return result.items
    }
    return setCalendarInviteAsync(callback, accessToken, email, toEmail, startTime, endTime, summary, description)
    
}