var isinMock = require('./../mocks/isin');

//GET - Return all isin 
exports.getIsin = function (req, res) {
  console.log('GET ISIN');
  res.status(200).jsonp(isinMock);
};