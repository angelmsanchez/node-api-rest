var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require('mongoose');
var http = require("http");

var app = express();

// Connection to DB
// mongoose.connect('mongodb://localhost/bmeapa', function (err, res) {
//   console.log('Connected to Database 1');
//   if (err) throw err;
//   console.log('Connected to Database 2');
// });

// Middlewares
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Controllers
var loginController = require('./controllers/login.controller');
var tradeReportController = require('./controllers/trade-report.controller');
var esiController = require('./controllers/esi.controller');
var currencyController = require('./controllers/currency.controller');
var isinController = require('./controllers/isin.controller');
var processController = require('./controllers/process.controller');
var userController = require('./controllers/user.controller');

// Example Route
var router = express.Router();

router.route('/login')
  .post(loginController.login);

router.route('/currencies')
  .get(currencyController.getCurrencies);

router.route('/trade-reports/validate')
  .get(isinController.getIsin);

router.route('/process')
  .get(processController.getProcess);

router.route('/trade-reports')
  .get(tradeReportController.listTradeReport)
  .post(tradeReportController.addTradeReport);

router.route('/trade-reports/:tradeId')
  .get(tradeReportController.detailTradeReport)
  .put(tradeReportController.updateTradeReport);

router.route('/esis')
  .get(esiController.listEsi)
  .post(esiController.addEsi);

router.route('/esis/:id')
  .get(esiController.detailEsi);

router.route('/esis/:id/users/fix')
  .get(userController.getUserFix);

router.route('/esis/:id/users/db')
  .get(userController.getUserDashboard);

router.route('/esis/:id/users/contacts')
  .get(userController.getUserContact);

router.route('/users/admin')
  .get(userController.getUserAdmin);

router.route('/users/super')
  .get(userController.getUserSupervisor);



// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

  // Set to true if you need the website to include cookies in the requests sent
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(router);

// Start server
app.listen(4444, function () {
  console.log("Node server running on http://localhost:4444");
});