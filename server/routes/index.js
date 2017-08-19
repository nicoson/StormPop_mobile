var info_get = require('../model/info_get');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.type('html');
  res.render('index', { title: 'Express' });
});

router.get('/testapi', function(req, res, next) {
  res.send({
      userInfo: info_get.userInfo(),
      prodInfo: info_get.prodInfo()
  });
	// res.send(info_get.userInfo());
});

module.exports = router;
