var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var tradeReportSchema = new Schema({
  id: Number,
  tradeReportId: Number,
  tradeId: String,
  securityId: String,
  lastPx: Number,
  currency: String,
  lastQty: Number,
  status: Number,
  transactTime: Date,
  apaLastUpdate: Date,
  matchType: String,
  priceType: Number
});

module.exports = mongoose.model('TradeReportModel', tradeReportSchema);