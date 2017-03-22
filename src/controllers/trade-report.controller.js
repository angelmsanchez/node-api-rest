var mongoose = require('mongoose');
var tradeReportModel = mongoose.model('TradeReportModel');
var tradeReportsMock = require('./../mocks/trade-reports');

//GET - Return all tradeReports 
exports.listTradeReport = function (req, res) {
  console.log('GET TRADE-REPORTS');
  res.status(200).jsonp(tradeReportsMock);
};

//POST - Return all tradeReports 
exports.addTradeReport = function (req, res) {
  console.log('POST TRADE-REPORT');
  req.body.id = Math.random();
  tradeReportsMock.elements.push(req.body);
  tradeReportsMock.total = tradeReportsMock.elements.length;
  res.status(200).jsonp(req.body);
};

//PUT - Return all tradeReports 
exports.cancelTradeReport = function (req, res) {
  console.log('PUT TRADE-REPORT');
  req.body.status = 2;
  tradeReportsMock['elements'].map(tradeReport => {
    if (tradeReport.tradeId === req.body.tradeId) {
      return req.body;
    } else {
      return tradeReport;
    }
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