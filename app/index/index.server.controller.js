exports.render = function(req, res) {
    res.render('index/index', {
        title: 'eAttire - Overview',
        user: req.user ? req.user.username : ''
    })
};