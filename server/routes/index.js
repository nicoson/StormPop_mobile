var userInfo = require('../model/userInfo');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testapi', function(req, res, next) {
  res.send(userInfo.get());
});

module.exports = router;
