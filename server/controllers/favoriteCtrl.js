const app = require('../index.js')
const db = app.get('db')

var exports = module.exports = {}

exports.addToFavorites = (req, res) => {
  db.addToFavorites([req.body.user_id, req.body.unique_id, req.body.name, req.body.city, req.body.state, req.body.length, req.body.rating], (err, response) => {
    if (err) {
      console.log(err)
    }
    res.status(200).send(response);
  })
}

exports.getFavorites = (req, res) => {
  db.getFavorites([req.user_id], (err, response) => {
    if (err) {
      console.log(err)
    }
    res.status(200).send(response);
  })
}
