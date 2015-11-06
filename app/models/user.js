var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var users = new mongoose.Schema({
    username  : String
  , password  : String
});

var User = db.mongoose.model('User', users)
  

User.comparePassword = function(attemptedPassword, savedPassword, callback) {
    bcrypt.compare(attemptedPassword, savedPassword), function(err, isMatch) {
      callback(isMatch);
    };
  },


users.pre('save', function(next){
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.password, null, null).bind(this)
      .then(function(hash) {
        this.password = hash;
        next();
      });
});

module.exports = User;
