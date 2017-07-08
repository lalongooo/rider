'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TripSchema = new Schema({
  id: {
    type: Number,
    Required: 'Kindly enter the id of the trip'
  },
  choferId: {
    type: Number,
    Required: 'Kindly enter the chofer of the trip'
  },
  carId: {
    type: Number,
    Required: 'Kindly enter the car for the trip'
  },
  longitude: {
      type: Number,
      Required: 'Kindly enter the start longitude for the trip'
  },
  latitude: {
      type: Number,
      Required: 'Kindly enter the start longitude for the trip'
  },
    event: {
    type: Number,
    Required: 'Kindly enter the event for the trip'
  },
    status: {
        type: Number,
        Required: 'Kindly enter the status for the trip'
    }
    /*,
  created_date: {
    type: Date,
    default: Date.now
  }*/
});

module.exports = mongoose.model('Trips', TripSchema);