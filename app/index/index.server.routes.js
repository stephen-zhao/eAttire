module.exports = function(app) {
    var index = require('./index.server.controller');
    app.get('/', index.render);
};