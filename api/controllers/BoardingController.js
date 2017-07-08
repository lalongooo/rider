'use strict';

var mongoose = require('mongoose'),
  Boarding = mongoose.model('Boardings');

exports.list_all_Boardings = function(req, res) {
  Boarding.find({}, function(err, Boardings) {
    if (err)
      res.send(err);
    res.json(Boardings);
  });
};

exports.create_a_Boarding = function(req, res) {
  var new_Boarding = new Boarding(req.body);
  new_Boarding.save(function(err, Boarding) {
    if (err)
      res.send(err);
    res.json(Boarding);
  });
};


exports.get_a_Boarding = function(req, res) {
  Boarding.findById(req.params.BoardingId, function(err, Boarding) {
    if (err)
      res.send(err);
    res.json(Boarding);
  });
};


exports.update_a_Boarding = function(req, res) {
  Boarding.findOneAndUpdate({_id: req.params.BoardingId}, req.body, {new: true}, function(err, Boarding) {
    if (err)
      res.send(err);
    res.json(Boarding);
  });
};


exports.delete_a_Boarding = function(req, res) {
  Boarding.remove({
    _id: req.params.BoardingId
  }, function(err, Boarding) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};