//===================== Required Dependencies =======================//

const express = require('express')
      , bodyParser = require('body-parser')
      , massive = require('massive')
      , session = require('express-session')
      , cors = require('cors')
      , passport = require('passport')
      , Auth0Strategy = require('passport-auth0')
      , config_server = require('./config_server')

//========================= Intialize App ===========================//
const app = module.exports = express()

app.use(session(config_server.mySecret))

app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

//============================== Auth0 ===============================//

passport.use(new Auth0Strategy(config_server.authPass, function(accessToken, refreshToken, extraParams, profile, done) {
   return done(null, profile);
}))

app.get('/auth', passport.authenticate('auth0')); //START

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: '/me',
  failureRedirect: '/login'
}))


passport.serializeUser(function(user, done) {
  return done(null, user);
})

passport.deserializeUser(function(user, done) {
  done(null, user);
})

app.get('/me', function(req, res) {
  res.send(req.user)
})

//=========================== Database ==============================//

const massiveInstance = massive.connectSync(config_server.massiveConnection)
app.set('db', massiveInstance)
const db = app.get('db')

//========================== Controller =============================//

const trailsCtrl = require('./controllers/trailsCtrl')

//========================= Get Request =============================//

app.get('/api/featured_trails', trailsCtrl.getfeaturedtrails)

//======================= Listening Port ============================//

const port = 7000

app.listen(port, () => {
  console.log("Started server on port", port)
});
