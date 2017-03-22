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

// Import Models
var tvshowModel = require('./models/tvshow.model')(app, mongoose);
var loginModel = require('./models/login.model')(app, mongoose);
var tradeReportModel = require('./models/trade-report.model')(app, mongoose);
var db = require('./mocks/db');

// Import Controllers
var TVShowCtrl = require('./controllers/tvshow.controller');
var loginController = require('./controllers/login.controller');
var tradeReportController = require('./controllers/trade-report.controller');

// Example Route
var router = express.Router();
router.get('/', function (req, res) {
  res.json(db);
});

router.route('/login')
  .post(loginController.login);

router.route('/trade-reports')
  .get(tradeReportController.listTradeReport)
  .post(tradeReportController.addTradeReport)
  .put(tradeReportController.cancelTradeReport);

router.route('/trade-reports/:tradeId')
  .get(tradeReportController.detailTradeReport);

router.route('/esis')
  .get(TVShowCtrl.findEsis, function (req, res) {
    res.send(" esis!");
  });

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(router);

// Start server
app.listen(4444, function () {
  console.log("Node server running on http://localhost:4444");
});