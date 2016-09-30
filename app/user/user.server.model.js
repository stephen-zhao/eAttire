var mongoose = require('mongoose'),
    crypto = require('crypto'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
	    type: String,
	    trim: true,
        index: true,
	    unique: true,
	},
    email: {
    	type: String,
    	index: true,
        unique: true,
    },
    password: String,
    name: String,
    provider: String,
    providerId: String,
    providerData: {},
    nOfLogins: Number,
});

UserSchema.pre('save',
    function(next) {
        if (this.password) {
            var sha256 = crypto.createHash('sha256');
            this.password = sha256.update(this.password).digest('hex');
        }
        next();
    }
);

UserSchema.methods.authenticate = function(password) {
    var sha256 = crypto.createHash('sha256');
    sha256 = sha256.update(password).digest('hex');

    return this.password === sha256;
};

UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
    var _this = this;
    var possibleUsername = username + (suffix || '');

    _this.findOne(
        {username: possibleUsername},
        function(err, user) {
            if (!err) {
                if (!user) {
                    callback(possibleUsername);
                }
                else {
                    return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
                }
            }
            else {
                callback(null);
            }
        }
    );
};

mongoose.model('User', UserSchema);
