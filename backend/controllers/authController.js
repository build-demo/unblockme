const axios = require('axios');
const User =require('../models/userModel')

let token = null;

exports.githubAuth= async(req, res) => {
  try {
      let user
    const body = {
        client_id: process.env.GITHUB_AUTH_CLIENT_ID,
        client_secret: process.env.GITHUB_AUTH_CLIENT_SECRET,
        code: req.query.code
      };
      const opts = { headers: { accept: 'application/json' } };
      const responseToken = await axios.post(`https://github.com/login/oauth/access_token`, body, opts)
      const token = await responseToken.data['access_token']
      const headerDetails = { headers: { Authorization: `bearer ${token}`} };
      const userDetails= await axios.get(`https://api.github.com/user`, headerDetails)
      const userInfo = userDetails.data
      user = await User.findOneAndUpdate(
        {githubEmail: userInfo.email}, 
        {githubId: userInfo.login,
        profilepicture: userInfo.avatar_url,
        bio: userInfo.bio,
        refreshToken: responseToken.data['refresh_token']
        }, {new: true} 
        )
        if(user){
           return res.redirect(`${process.env.CLIENT_URL}/profile-setup`)
        }
        user = await User.findOneAndUpdate({email: userInfo.email}, 
            { 
                githubEmail: userInfo.email, 
                githubId: userInfo.login, 
                profilepicture: userInfo.avatar_url,
                bio: userInfo.bio,
                refreshToken: responseToken.data['refresh_token'] },
            {new: true}
            )
            if(user){
                return res.redirect(`${process.env.CLIENT_URL}/profile-setup`)
             }
             const newUser = new User({
                githubEmail: userInfo.email,
                name: userInfo.name,
                email: userInfo.email, 
        githubId: userInfo.login, 
        profilepicture: userInfo.avatar_url,
        bio: userInfo.bio,
        refreshToken: responseToken.data['refresh_token']
            })
            newUser.save()
      
    //   
  } catch (error) {
      console.log(error);
    res.status(500).json({ message: error.message })
  }
  }

