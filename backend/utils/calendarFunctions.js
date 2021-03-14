const {google} = require('googleapis')
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