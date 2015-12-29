var config = require('./config'),
	express = require('express'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	flash = require('connect-flash'),
	session = require('express-session');

module.exports = function() {
	var app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: 'OurSuperSecretCookieSecret'
	}));

	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());

	// TODO: require(server.routes)
	// eg require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/user.server.routes.js')(app);

	app.use(express.static('./public'));

	return app;
};