const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {getUser, isUserRegistered} = require('../controllers/userController');

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
        callbackURL: process.env.callbackURL
    }, (accessToken, refreshToken, profile, done) => {
        console.log('passport callback function fired:')
        var email = profile._json.email
        
        //Check if user exists
        done()
    })
);