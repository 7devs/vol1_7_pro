var router = require('express').Router();

router.route('/one')
    .get(function(req, res, next) {
        res.render('one');
    });

module.exports = router;
