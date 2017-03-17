var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var tvshowSchema = new Schema({
  id: Number,
  email: String,
  name: String,
  nameEsi: String,
  phone: Number,
  status: Number,
  products: [],
  userType: String
});

module.exports = mongoose.model('LoginModel', tvshowSchema);