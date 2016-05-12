var router = require('express').Router();


/* Unit tests. */
router.get('/', function(req, res, next) {
    res.render('unit-tests.html');
});

module.exports = router;
