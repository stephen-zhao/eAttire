var users = require('./user.server.controller'),
	passport = require('passport');

module.exports = function(app) {
    app.route('/api/users')
    	.post(users.create)
    	.get(users.list);

    app.route('/api/users/:userId')
    	.get(users.read)
    	.put(users.update)
    	.delete(users.delete);

    app.param('userId', users.getUserByID);

    app.route('/register')
    	.get(users.renderRegister)
    	.post(users.register);

    app.route('/login')
    	.get(users.renderLogin)
    	.post(passport.authenticate('local', {
    		failureRedirect: '/login',
    		failureFlash: true
    	}), users.postlogin);

    app.route('/logout')
    	.get(users.logout);
};
