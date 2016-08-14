// app/models/user.js

var mongoose     = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema       = mongoose.Schema;

var userSchema = new Schema({
  userId: { type: String, required: true, unique:true },
  firstName: { type: String },
  lastName: { type: String }
});

module.exports = mongoose.model('User', userSchema);
