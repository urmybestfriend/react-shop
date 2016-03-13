var express = require('express');
var router = express.Router();

router.use('/', function (req, res) {
	res.render('index');
});

module.exports = router;

/*router
    .post('/post_example', callback);*/
    