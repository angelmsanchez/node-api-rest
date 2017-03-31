const transactionReportsMock = require('./../mocks/transaction-report');

//GET - Return all tradeReports 
exports.listTransactionReport = function (req, res) {
  console.log('GET TRANSACTION-REPORTS');
  res.status(200).jsonp(transactionReportsMock);
};