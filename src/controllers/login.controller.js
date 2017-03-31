const loginMock = require('./../mocks/login');

exports.login = function (req, res) {
  console.log('POST LOGIN');
  res.status(200).jsonp(loginMock);
};