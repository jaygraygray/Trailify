//===================== Required Dependencies =======================//

const express = require('express')
      , bodyParser = require('body-parser')
      , massive = require('massive')
      , session = require('session')
      , cors = require('cors')
      , passport = require('passport')
      , Auth0Strategy = require('passport-auth0')
      , config_server = require('./config_server')

//========================= Intialize App ===========================//

const app = module.exports = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

//=========================== Database ==============================//

const massiveInstance = massive.connectSync(config_server.massiveConnection)
app.set('db', massiveInstance)
const db = app.get('db')

//========================== Controller =============================//

const trailsCtrl = require('./controllers/trailsCtrl')

//========================= Get Request =============================//

app.get('/api/featured_trails', trailsCtrl.getfeaturedtrails)

//======================= Listening Port ============================//

const port = 8000

app.listen(port, () => {
  console.log("Started server on port", port)
});
