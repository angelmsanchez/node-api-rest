const esiMock = require('./../mocks/esis');

//GET - Return all esis 
exports.listEsi = function (req, res) {
  console.log('GET ESIS');
  res.status(200).jsonp(esiMock);
};

//POST - Return all esis 
exports.addEsi = function (req, res) {
  console.log('POST ESIS');
  req.body.id = Math.random();
  esiMock.elements.push(req.body);
  esiMock.total = esiMock.elements.length;
  res.status(200).jsonp(req.body);
};

//PUT - Return all esis 
exports.updateEsi = function (req, res) {
  console.log('PUT ESI');
  esiMock['elements'].map(esi => {
    if (esi.id === req.params.id) {
      esi.status = 2;
    }
    return esi;
  });
  res.status(200).jsonp(req.body);
};

//GET - Return all esis 
exports.detailEsi = function (req, res) {
  console.log('GET DETAIL ESIS ', req.params.id);
  let esiFind;
  esiMock['elements'].map(esi => {
    if (esi.id === req.params.id) {
      esiFind = esi;
    }
  });
  esiFind = esiFind ? esiFind : {};
  res.status(200).jsonp(esiFind);
};