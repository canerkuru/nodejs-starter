var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Hakkında',
						name: 'Caner Kuru',
						email: 'caner.kuru@yahoo.com'
						});
});

module.exports = router;
