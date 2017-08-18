var fs = require('fs');

function userInfo(){};

userInfo.get = function() {
	var result = JSON.parse(fs.readFileSync('./public/mockdata/userinfo.json'));
	return result;
}

// console.log(userInfo.get())
module.exports = userInfo;