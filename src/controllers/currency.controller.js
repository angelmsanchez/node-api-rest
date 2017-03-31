const currencyMock = require('./../mocks/currencies');

//GET - Return all currencies 
exports.getCurrencies = function (req, res) {
  console.log('GET CURRENCY');
  res.status(200).jsonp(currencyMock);
};