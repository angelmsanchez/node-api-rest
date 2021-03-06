const userContactMock = require('./../mocks/user-contact');
const userAdminMock = require('./../mocks/user-admin');
const userDashboardMock = require('./../mocks/user-dashboard');
const userFixMock = require('./../mocks/user-fix');
const userSupervisorMock = require('./../mocks/user-supervisor');

//GET - Return all users contacts 
exports.getUserContact = function (req, res) {
  console.log('GET USER CONTACT');
  res.status(200).jsonp(userContactMock);
};

//GET - Return all users admin 
exports.getUserAdmin = function (req, res) {
  console.log('GET USER ADMIN');
  res.status(200).jsonp(userAdminMock);
};

//GET - Return all users dashboard 
exports.getUserDashboard = function (req, res) {
  console.log('GET USER DASHBOARD');
  res.status(200).jsonp(userDashboardMock);
};

//GET - Return all users Fix 
exports.getUserFix = function (req, res) {
  console.log('GET USER CONTACT');
  res.status(200).jsonp(userFixMock);
};

//GET - Return all users supervisor 
exports.getUserSupervisor = function (req, res) {
  console.log('GET USER SUPERVISOR');
  res.status(200).jsonp(userSupervisorMock);
};