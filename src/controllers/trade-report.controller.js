var mongoose = require('mongoose');
var tradeReportModel = mongoose.model('TradeReportModel');
var tradeReportsMock = require('./../mocks/trade-reports');

//GET - Return all tradeReports 
exports.listTradeReport = function (req, res) {
  console.log('GET TRADE-REPORTS');
  res.status(200).jsonp(tradeReportsMock);
};

//GET - Return all tradeReports 
exports.detailTradeReport = function (req, res) {
  console.log('GET DETAIL TRADE REPORT ', req.params.tradeId);
  let tradeReportFind;
  tradeReportsMock['elements'].map(tradeReport => {
    console.log('dentro .map');
    if (tradeReport.tradeId === req.params.tradeId) {
      tradeReportFind = tradeReport;
    }
  });
  res.status(200).jsonp(tradeReportFind);
};