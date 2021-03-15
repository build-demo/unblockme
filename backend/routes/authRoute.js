const router = require('express').Router();
const passport = require('passport');
const { addUser } = require('../controllers/userController')
const { githubAuth } = require('../controllers/authController')

router.get('/failed', (req,res) => res.send('Failed Log In'))
router.get('/success', (req,res) => res.send('Successful Log In '))

// auth with google+
router.get('/google',(req, res, next)=> {
  next();
},passport.authenticate('google',{
  scope:[
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.app.created',
      'https://www.googleapis.com/auth/calendar.calendarlist.readonly',
      'https://www.googleapis.com/auth/calendar.events.freebusy',
      'https://www.googleapis.com/auth/calendar.freebusy',
    ],
    accessType: 'offline', approvalPrompt: 'force'
}));
router.get('/google/callback', 
  passport.authenticate('google', {session: false,
    failureRedirect: process.env.CLIENT_URL}),
  function(req, res){
    // console.log(req);
    res.redirect(`${process.env.CLIENT_URL}/profile-setup`)
  }
//   function(req, res) {
//     if(req.user.isRegistered){
//       //These should be edited as {frontend_url/dashbaord}
//       res.redirect('/dashboard')
//     }
//     else{
//       //These should be edited as {frontend_url/register}
//       res.redirect('/register')
//     }
// }
);


router.get('/github', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_AUTH_CLIENT_ID}&scope=user`);
});



// router.get('/github',
//   passport.authenticate('github', { scope: [ 'user:email' ] }));

// router.get('/github/callback', 
//   passport.authenticate('github', { session: false, failureRedirect: process.env.CLIENT_URL }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect(`${process.env.CLIENT_URL}/profile-setup`)
//   });



router.get('/github/callback', githubAuth);

module.exports = router;