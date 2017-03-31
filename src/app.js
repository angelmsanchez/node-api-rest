const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require('mongoose');
// const http = require("http");

const app = express();
const PORT = 4444;

// Connection to DB
mongoose.connect('mongodb://<bme-user>:<Cachopo>@ds011321.mlab.com:11321/bme-apa-db', function (err, res) {
  console.log('Connected to Database 1: ', res);
  if (err) throw err;
  console.log('Connected to Database 2: ', err);
});

// Middlewares
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Controllers
const loginController = require('./controllers/login.controller');
const tradeReportController = require('./controllers/trade-report.controller');
const esiController = require('./controllers/esi.controller');
const currencyController = require('./controllers/currency.controller');
const isinController = require('./controllers/isin.controller');
const processController = require('./controllers/process.controller');
const userController = require('./controllers/user.controller');
const transactionReportController = require('./controllers/transaction-report.controller');

// Example Route
const router = express.Router();

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

router.route('/transaction-reports')
  .get(transactionReportController.listTransactionReport);

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
app.listen(PORT, function () {
  console.log(`Node server running on http://localhost:${PORT}`);
});