const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');
const {addTokenFn} = require('../controllers/tokenController')
const AES = require('crypto-js/aes')


passport.serializeUser(function (user, cb){
    cb(null, user.id);
});

passport.deserializeUser(function(user_id, cb){
    cb(null, user_id);
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: process.env.callbackURL,
        passReqToCallback: true,
    },async (req, accessToken, refreshToken, profile, done) => {
        console.log('passport callback function fired:')
        profile.isRegistered = false;
        var profileData = profile._json
        let encryptedRT = AES.encrypt(refreshToken, process.env.CRYPTO_SECRET).toString()
        addTokenFn(profileData.email, encryptedRT)

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
                        const newUser = new User({
                            email: profileData.email,
                            name: profileData.name,
                            profilepicture: profileData.picture
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