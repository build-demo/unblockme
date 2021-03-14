const mongoose = require("mongoose")

const tokenSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    refreshToken: {
       type: String
    },
});

module.exports = mongoose.model("Token", tokenSchema)