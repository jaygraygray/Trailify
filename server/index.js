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

//============================== Auth0 ===============================//


passport.use(new Auth0Strategy(config_server.authPass, function(accessToken, refreshToken, extraParams, profile, done) {
    db.getUsers([profile.id], function(err, user) {
      if (!user) {
        console.log('creating user');
        db.storeUser([profile.givenName, profile.familyName], function(err, user) {
          console.log('user created', user)
          return done(err, user)
        })
      }
      else {
        console.log('found user', user);
        return done(err, user);
      }
    })
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
