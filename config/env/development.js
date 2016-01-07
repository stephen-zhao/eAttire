var port = process.env.PORT || 3000;

module.exports = {
	port: port,
	db: process.env.MONGOLAB_URI || 'mongodb://ds037175.mongolab.com:37175/heroku_5zh01tdr',
	dbUser: process.env.DB_USER || '',
	dbPass: process.env.DB_PASS || '',
	facebook: {
		clientID: '513828288756645',
		clientSecret: '2d7cc991efddb864e9af61f307980b9a',
		callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'yFntGKkvMZkDKL47XGtzLNdRA',
		clientSecret: 'EAiPTjPYLX5nrkpRtxYQflbWpRTqqLwwBHRLh7WpdQ1P69Tre6',
		callbackURL: 'http://localhost:'+ port +'/oauth/twitter/callback'
	}
};