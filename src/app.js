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

// Import Models and controllers
var tvshowModel = require('./models/tvshow.model')(app, mongoose);
var loginModel = require('./models/login.model')(app, mongoose);
var tradeReportModel = require('./models/trade-report.model')(app, mongoose);
var db = require('./mocks/db');
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
  .get(tradeReportController.listTradeReport);

router.route('/trade-reports/:tradeId')
  .get(tradeReportController.detailTradeReport);


router.route('/esis')
  .get(TVShowCtrl.findEsis, function (req, res) {
    res.send(" esis!");
  });
app.use(router);

// API routes
var tvshows = express.Router();

tvshows.route('/tvshows')
  .get(TVShowCtrl.findAllTVShows)
  .post(TVShowCtrl.addTVShow);

tvshows.route('/esis')
  .get(TVShowCtrl.findEsis, function (req, res) {
    res.send("Hello world esis!");
  });

tvshows.route('/tvshows/:id')
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateTVShow)
  .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);

// Start server
app.listen(5555, function () {
  console.log("Node server running on http://localhost:5555");
});