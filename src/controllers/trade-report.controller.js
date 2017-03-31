const tradeReportsMock = require('./../mocks/trade-reports');

//GET - Return all tradeReports 
exports.listTradeReport = function (req, res) {
  console.log('GET TRADE-REPORTS');
  res.status(200).jsonp(tradeReportsMock);
};

//POST - Return all tradeReports 
exports.addTradeReport = function (req, res) {
  console.log('POST TRADE-REPORT');
  tradeReportsMock.elements.unshift (req.body ? req.body : req.message);
  tradeReportsMock.total = tradeReportsMock.elements.length;
  if (res) res.status(200).jsonp(req.body);
};

//PUT - Return all tradeReports 
exports.updateTradeReport = function (req, res) {
  console.log('PUT TRADE-REPORT');
  tradeReportsMock['elements'].map(tradeReport => {
    if (tradeReport.tradeId === req.params.tradeId) {
      tradeReport.status = 2;
    }
    return tradeReport;
  });
  res.status(200).jsonp(req.body);
};

//GET - Return all tradeReports 
exports.detailTradeReport = function (req, res) {
  console.log('GET DETAIL TRADE-REPORT ', req.params.tradeId);
  let tradeReportFind;
  tradeReportsMock['elements'].map(tradeReport => {
    if (tradeReport.tradeId === req.params.tradeId) {
      tradeReportFind = tradeReport;
    }
  });
  tradeReportFind = tradeReportFind ? tradeReportFind : {};
  res.status(200).jsonp(tradeReportFind);
};