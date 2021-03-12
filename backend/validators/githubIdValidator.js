const request = require('request')

const verifyGithubId = function(userId) {
    const options = {
        url: "https://github.com/"+userId,
        method: "GET",
    }

    return new Promise(function(resolve, reject){
        request.get(options, function(err, res, body){
            if(err)reject(err)
            else {
                resolve(res.statusCode !== 404)
            }
        })
    })
}

module.exports = verifyGithubId