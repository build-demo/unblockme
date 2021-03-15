const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { getPrimaryCalendar} = require('./calendarConfig')
const User = require('../models/userModel');
const {getParamsFromUrl} = require('../utils/util')

passport.serializeUser(function (user, cb){
    cb(null, user.id);
});

passport.deserializeUser(function(obj, cb){
    cb(null, obj);
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: process.env.callbackURL,
        // passReqToCallback: true
    },async (accessToken, refreshToken, profile, done) => {
        
        console.log('passport callback function fired:')
        console.log(refreshToken,'this is the refresh token');
        console.log(accessToken,'this is the access token');

    
        // console.log(accessToken['_parsedUrl']['query'])
        // console.log("RefreshToken => " + refreshToken)
        // console.log(profile)
        profile.isRegistered = false;
        var profileData = profile._json
        //Check if user exists
        await User.findOne({email: profileData.email})
            .exec(async (err, item) => {
                if(err) console.log(err)
                else{
                    if(item != null){
                        if(item.githubId.length > 0){
                            profile.isRegistered = true;
                        }
                        done(null, profile)
                    }
                    else{
                        const primaryCalendar = await getPrimaryCalendar(refreshToken)
                        const calendarId=  primaryCalendar.id
                        const userId = calendarId || profileData.email
                        const calendar = `https://calendar.google.com/calendar/u/0/r?cid=${userId}`

                        const newUser = new User({
                            email: profileData.email,
                            name: profileData.name,
                            profilepicture: profileData.picture,
                            calendar,
                            refreshToken
                        })
                        await newUser.save((err, feedback) => {
                            if(err) return {error : "Not able to save new user"}
                            done(null, profile)
                        })
                    }
                }
            })
    })
);

// https://myaccount.google.com/permissions