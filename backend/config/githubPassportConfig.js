const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/userModel');

passport.serializeUser(function (user, cb){
    cb(null, user.id);
});

passport.deserializeUser(function(obj, cb){
    cb(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: '83308686878d3b651505',
    clientSecret: '3e54b9c6f1804d3520c19630dc74e1fd5a8bc82e',
    callbackURL: 'http://localhost:8000/auth/github/callback'
  },
 async function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(profile, '***********');
    console.log(accessToken, '***********');
    console.log(refreshToken, '***********');
    profile.isRegistered = false;
    const profileData = profile._json
   const user = await User.findOneAndUpdate({
       githubEmail: profileData.githubEmail,
       githubId: profileData.id,
       githubRefreshToken: refreshToken
   })
   if(user){
       cb(null, profile)
   }
   await newUser.save((err, feedback) => {
    if(err) return {error : "Not able to save new user"}
    done(null, profile)
})
  }
));