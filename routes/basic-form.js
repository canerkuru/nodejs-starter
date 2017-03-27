var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('basic-form', { title: 'Form Sample'});
});

router.post('/', function(req, res) {

  res.render('basic-form',{ title: 'Basic Form',
							name:req.body.name,
							email:req.body.email,
							desc:req.body.description});
});

module.exports = router;
