require('dotenv').config()

const fs = require("fs")
const mongoose = require("mongoose")
const express = require("express")
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoDBSession = require('connect-mongodb-session')(session)
const cors = require("cors")
const passport = require('passport')

require('./config/passportConfig')

const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')
const mentorRoute = require('./routes/mentorRoute')

const app = express()

//db connect
mongoose.connect(process.env.MONGODB_URI ||
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

const sessionStore = new mongoDBSession({
    uri: process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/unblockmedb",
    collection: "clientSessions"
})

//MIDDLEWARES

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 
app.use(cors())
app.use(cookieParser())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    // cookie: {secure:true}
}))
app.use(passport.initialize())
app.use(passport.session())

//port to run the app
const port = process.env.PORT||8000


app.use('/user', userRoute)
app.use('/auth', authRoute)
app.use('/mentor', mentorRoute)

//app start
app.listen(port, () => {
    console.log(`app is running at:`)
    console.log(`http://localhost:${port}`)
})