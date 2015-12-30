exports.render = function(req, res) {
    res.render('index', {
        title: 'eAttire - Dashboard',
        user: req.user ? req.user.username : ''
    })
};