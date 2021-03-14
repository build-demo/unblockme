const User = require('../models/userModel')

exports.addUser = async(req, res) => {
    try {
        console.log(req, 'this is requuest');
        // if(req.user.isRegistered){
            //These should be edited as {frontend_url/dashbaord}
           
        // }
        const user = new User(req.body)
        const newUser = await user.save()
        // return res.status(201).send({
        //     user: newUser,
        //     message: 'use successfully created'
        // })
        return res.redirect(`${process.env.CLIENT_URL}/profile-setup`)
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error: "Not able to save the user in the db"
        });
    }
}

exports.getUser = (req, res, next) => {
     User.findOne({email: req.body.email})
    .exec((err, item) => {
        if(err){
            return res.status(404).json({
                error: "No user found"
            })
        }
        req.user = item
        next()
    })
}

exports.isUserRegistered = (req, res) => {
    if(req.user != null){
        if(req.user.githubId.length > 0)
        return res.status(200).json(req.user)
        return res.status(400).json({error: "Not registered"})
    }
    return res.status(404).json({error: "User not present"})    
}

exports.registerUser = (req, res) => {
     User.findOneAndUpdate({email: req.body.email}, {githubId: req.body.githubId}, {runValidators: true})
    .exec((err, items) => {
        if(!items){
            return res.status(404).json({
                error: "No user found"
            })
        }
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        return res.status(200).json(items)
    })
}

exports.isAuthorized = (req, res) => {
    if(req.session.isAuthorized){
        return res.status(200).json({
            isAuth : true
        })
    }
    else return res.status(404).json({
        error: "User not Authenticated"
    })
}

exports.getAllUsers =async(req, res)=>{
    try {
        const { id, language} = req.query
        const languages= language && language.toLowerCase().split(',')
        const obj = languages && languages.reduce((obj, cur, i) => { return { ...obj, [cur]: true }; }, {});
        let users= obj && await User.find({$or:[obj]});
        if( !users ){
            users = await User.find()
            console.log(users, 'this is the data');
        }
        return res.status(200).send({
            users, issueId: id
        })
        
    } catch (error) {
        console.log(error);
        return res.status(404).send({
            error: "could not return users"
        })
    }
}

exports.updateUser = async(req, res) => {
    try {
      const user = await User.findOneAndUpdate(req.body)
      return res.status(201).send({
        user, message: 'user data updated successfully'
    })
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: error.message })
    }
}