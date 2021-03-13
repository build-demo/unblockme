const User = require('../models/userModel')

exports.addUser = (req, res) => {
    const user = new User(req.body)
    user.save((err, feedback) => {
        if(err){
            console.log(err);
            return res.status(400).json({
                error: "Not able to save the user in the db"
            });
        }
        return res.json({
            user
        });
    })
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
