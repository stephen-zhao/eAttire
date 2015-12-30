var users = require('../../app/controllers/user.server.controller');

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
    		successRedirect: '/',
    		failureRedirect: '/login',
    		failureFlash: true
    	}));

    app.route('/logout')
    	.get(users.logout);
};
