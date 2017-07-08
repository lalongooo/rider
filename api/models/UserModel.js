'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the user'
  },
  description: {
    type: String,
    Required: 'Kindly enter the description of the user'
  },
  fb: {
    type: String,
    Required: 'Kindly enter the fb link of the user'
  }
    /*,
  created_date: {
    type: Date,
    default: Date.now
  }*/
});

module.exports = mongoose.model('Users', UserSchema);