const app = require('../index.js')
const db = app.get('db')

module.exports = {
  	// RETURN CURRENT USER //
  	me: function(req, res) {
  		if (!req.user) {
  			return res.status(200).send(null);
  		}

  		// Return user
  		return res.status(200).send(req.user);
  }
}
