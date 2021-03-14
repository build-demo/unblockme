require('dotenv').config()

const fs = require("fs")
const mongoose = require("mongoose")
const express = require("express")
const session = require('express-session')
const mongoDBSession = require('connect-mongodb-session')(session)
const bodyParser = require("body-parser")
const cors = require("cors")
const passport = require('passport')
require('./config/passportConfig')
const cookieSession = require('cookie-session')

const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')

const app = express()

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

// const sessionStore = new mongoDBSession({
//     uri: process.env.MONGODB_URI ||
//     process.env.MONGOLAB_URI ||
//     process.env.MONGOHQ_URL ||
//     "mongodb://127.0.0.1:27017/unblockmedb",
//     collection: "clientSessions"
// })

mongoose.connection.on('error', (err) => {
    console.log(`DB connection error: ${err.message}`)
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 
app.use(cors())
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: sessionStore
// }))
app.use(passport.initialize())
app.use(passport.session())
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized!' })
    }
});

app.use(cookieSession({
    maxAge: 30 * 24 * 60 *60 * 1000,
    keys:[process.env.COOKIE_KEY]
}))


//port to run the app
const port = process.env.PORT||8000

const testRoute = require('./routes/testRoute')

app.use('/user', userRoute)
app.use('/auth', authRoute)
app.use('/test', testRoute)

//app start
app.listen(port, () => {
    console.log(`app is running at:`)
    console.log(`http://localhost:${port}`)
})