'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the user'
  },
  email: {
    type: String,
    Required: 'Kindly enter the email of the user'
  },
  foo: {
    type: String,
    Required: 'Kindly enter the email of the user'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);