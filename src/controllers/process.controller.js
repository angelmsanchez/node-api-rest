const processMock = require('./../mocks/process');

//GET - Return all process 
exports.getProcess = function (req, res) {
  console.log('GET PROCESS');
  res.status(200).jsonp(processMock);
};