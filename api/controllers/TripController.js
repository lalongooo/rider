'use strict';

var mongoose = require('mongoose'),
  Trip = mongoose.model('Trips');

exports.list_all_Trips = function(req, res) {
  Trip.find({}, function(err, Trips) {
    if (err)
      res.send(err);
    res.json(Trips);
  });
};

exports.create_a_Trip = function(req, res) {
  var new_Trip = new Trip(req.body);
  new_Trip.save(function(err, Trip) {
    if (err)
      res.send(err);
    res.json(Trip);
  });
};


exports.get_a_Trip = function(req, res) {
  Trip.findById(req.params.TripId, function(err, Trip) {
    if (err)
      res.send(err);
    res.json(Trip);
  });
};


exports.update_a_Trip = function(req, res) {
  Trip.findOneAndUpdate({_id: req.params.TripId}, req.body, {new: true}, function(err, Trip) {
    if (err)
      res.send(err);
    res.json(Trip);
  });
};


exports.delete_a_Trip = function(req, res) {
  Trip.remove({
    _id: req.params.TripId
  }, function(err, Trip) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};