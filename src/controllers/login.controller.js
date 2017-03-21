var mongoose = require('mongoose');
var loginModel = mongoose.model('LoginModel');
var loginMock = require('./../mocks/login');


exports.login = function (req, res) {
  console.log('POST LOGIN');
  // console.log(req);
  // console.log(JSON.stringify(res));
  // var user = {};
  // loginModel.find(function (err, user) {
  console.log(res.status);
  // if (err) return res.status(500).send(err.message);
  res.status(200).jsonp(loginMock);
  // });
};