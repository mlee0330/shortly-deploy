var db = require('../config');
var crypto = require('crypto');
var mongoose - require('mongoose');

var urls = new mongoose.Schema({
    url       : { type: String, index: true }
  , base_url  : { type: String, lowercase: true, trim: true }
  , code      : String 
  , title     : String
  , visits    : Number
});

var Link = mongoose.model('Link', urls);

var createSha = function(url) {
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

linkSchema.pre('save', function(next){
  var code = createSha(this.url);
  this.code = code;
  next();
});

module.exports = Link;
