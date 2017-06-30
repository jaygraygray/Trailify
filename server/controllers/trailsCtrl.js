const app = require('../index.js')
const db = app.get('db')

var exports = module.exports = {}

exports.getfeaturedtrails = (req, res) => {
  console.log(req);
  db.featured_trails((err, response) => {
    if (err) {
      console.log(err)
    }
    console.log(response);
    res.status(200).send(response);
  })
}
