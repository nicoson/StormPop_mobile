var fs = require('fs');

function info_get(){};

info_get.userInfo = function() {
	var result = JSON.parse(fs.readFileSync('./public/mockdata/userinfo.json'));
	return result;
}

info_get.prodInfo = function() {
	var result = JSON.parse(fs.readFileSync('./public/mockdata/prodinfo.json'));
	return result;
}

info_get.orderInfo = function() {
	var result = JSON.parse(fs.readFileSync('./public/mockdata/orderinfo.json'));
	return result;
}

// console.log(userInfo.get())
module.exports = info_get;