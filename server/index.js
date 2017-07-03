//===================== Required Dependencies =======================//

const express = require('express')
      , bodyParser = require('body-parser')
      , massive = require('massive')
      , session = require('express-session')
      , cors = require('cors')
      , passport = require('passport')
      , Auth0Strategy = require('passport-auth0')
      , config_server = require('./config_server')
      , path = require('path')
      , nodemailer = require("nodemailer")

//========================= Intialize App ===========================//

const db = massive.connectSync(config_server.massiveConnection)
const app = module.exports = express();
app.set('db', db)

app.use(express.static('.././build'))
app.use(bodyParser.json())
app.use(session(config_server.mySecret))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())

var corsOptions = {
    origin: 'http://localhost:8080'
}

//============================== Auth0 ===============================//


passport.use(new Auth0Strategy(config_server.authPass, function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
}))

app.get('/auth', passport.authenticate('auth0')); //START

app.get('/auth/callback',
  passport.authenticate('auth0', {
    successRedirect: '/profile',
    failureRedirect: '/'
}))

passport.serializeUser(function(user, done) {
   done(null, user);
})

passport.deserializeUser(function(user, done) {
  done(null, user);
})

const userCtrl = require('./controllers/userCtrl')

app.get('/me', userCtrl.me)

//========================== NodeMailer =============================//

app.post('/contactus', function(req, res){

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config_server.emailAuth.user,
        pass: config_server.emailAuth.pass
    }
});

// setup email
let mailOptions = {
    from: '"trailifydevelopers" <trailifydevelopers@gmail.com>', // sender address
    to: req.body.email, // list of receivers
    subject: 'Thank You For Subscribing To Our Newsletter', // Subject line
    text: "You're subscribed!", // plain text body
    html: '<b>Thank you!</b>' // html body
};

transporter.sendMail(mailOptions, (error) => {
    let date = new Date();
    if(error) {
      res.sendStatus(500);
    } else {
      console.log(`Newsletter confirmation email sent on ${date.getMonth()}/${date.getDate()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
      res.sendStatus(200);
    }
    })
});

//========================== Controller =============================//

const trailsCtrl = require('./controllers/trailsCtrl')

//========================= Get Requests =============================//

app.get('/api/featured_trails', trailsCtrl.getfeaturedtrails)

//======================= Listening Port ============================//

app.get('*', function (request, response){
 response.sendFile(path.join(__dirname, '.././build/', 'index.html'))
})

const port = 5000

app.listen(port, () => {
  console.log("Started server on port", port)
});
