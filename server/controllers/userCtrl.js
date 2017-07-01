const app = require('../index.js')
const db = app.get('db')

module.exports = {
  	me: function(req, res, next) {
  		if (!req.user) {
  			return res.status(200).send(null);
  		}
      console.log(req.user);
  		return res.status(200).send(req.user);
  }
}
