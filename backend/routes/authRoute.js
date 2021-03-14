const router = require('express').Router();
const passport = require('passport');

router.get('/failed', (req,res) => res.send('Failed Log In'))
router.get('/success', (req,res) => res.send('Successful Log In '))

// auth with google+
router.get('/google',(req, res, next)=> {
  next();
},passport.authenticate('google',{
  accessType: 'offline',
  prompt: 'consent',
  session: false,
  scope:[
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/calendar.app.created',
      'https://www.googleapis.com/auth/calendar.calendarlist.readonly',
      'https://www.googleapis.com/auth/calendar.events.freebusy',
      'https://www.googleapis.com/auth/calendar.freebusy',
      'https://www.googleapis.com/auth/calendar.events'
    ]
}));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: process.env.FRONTEND_HOMEPAGE }),
  function(req, res) {
    if(req.user.isRegistered){
      //These should be edited as {frontend_url/dashboard}
      res.redirect(process.env.REGISTER_URL+'?email='+req.user._json.email)
    }
    else{
      res.redirect(process.env.DASHBOARD_URL)
    }
});

module.exports = router;