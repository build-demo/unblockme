const Token = require('../models/tokenModel')

async function saveToken(token) {
    try{
        token.save((err, feedback) => {
            if(err) return {error: "Not able to save token in db"}
            return feedback
        })
    }
    catch(err){
        console.log(err)
    }
}

exports.addTokenFn = (email, refreshToken) => {
    const newToken = new Token({
        email: email,
        refreshToken: refreshToken
    })

    Token.findOne({email:email}).
        exec((err, items) => {
            if(err) return console.log(err)
            if(items != null){
                Token.deleteOne({email: email}).then(()=>{
                    saveToken(newToken)
                }).catch((err)=>console.log(err))
            }
            else{
                saveToken(newToken)
            }
        })
}