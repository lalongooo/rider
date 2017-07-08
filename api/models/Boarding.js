'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BoardingSchema = new Schema({
  id: {
    type: Number,
    Required: 'Kindly enter the id of the boarding'
  },
  passengerId: {
    type: Number,
    Required: 'Kindly enter the chofer of the boarding'
  },
  tripId: {
    type: Number,
    Required: 'Kindly enter the car for the boarding'
  },
  longitude: {
      type: Number,
      Required: 'Kindly enter the start longitude for the boarding'
  },
  latitude: {
      type: Number,
      Required: 'Kindly enter the start longitude for the boarding'
  },
  gasReading: {
    type: Number,
    Required: 'Kindly enter the event for the boarding'
  },
  status: {
    type: Number,
    Required: 'Kindly enter the status for the boarding'
  }
    /*,
  created_date: {
    type: Date,
    default: Date.now
  }*/
});

module.exports = mongoose.model('Boardings', BoardingSchema);