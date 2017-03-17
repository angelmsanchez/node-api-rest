var mongoose = require('mongoose');
var loginModel = mongoose.model('LoginModel');
var loginMock = require('./../mocks/login');


exports.login = function (req, res) {
  console.log('POST LOGIN');
  // console.log(req);
  // console.log(JSON.stringify(res));
  // var user = {};
  // loginModel.find(function (err, user) {
  console.log('POST LOGIN 2');
  console.log(res.status);
  // if (err) return res.status(500).send(err.message);
  console.log('POST LOGIN 3');
  res.status(200).jsonp(loginMock);
  // });
};

//GET - Return all tvshows in the DB
exports.findAllTVShows = function (req, res) {
  TVShow.find(function (err, tvshows) {
    if (err) res.send(500, err.message);

    console.log('GET /tvshows')
    res.status(200).jsonp(tvshows);
  });
};