var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db, {user: config.dbUser, pass: config.dbPass});

	// TODO: Add require(app.models)
	require('../app/models/user.server.model');

	return db;
};
