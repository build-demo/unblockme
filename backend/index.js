require('dotenv').config()

const fs = require("fs")
const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")
const passport = require('passport')

const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 
app.use(cors())
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized!' })
    }
});
const passportSetup = require('./config/passportConfig');

//port to run the app
const port = process.env.PORT||8000

//db connect
mongoose.connect(process.env.MONGODB_URI ||
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    "mongodb://127.0.0.1:27017/unblockmedb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("DB Connected")
});

mongoose.connection.on('error', (err) => {
    console.log(`DB connection error: ${err.message}`)
});

app.use('/user', userRoute)
app.use('/auth', authRoute)

//app start
app.listen(port, () => {
    console.log(`app is running at:`)
    console.log(`http://localhost:${port}`)
})