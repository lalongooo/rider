'use strict';
module.exports = function(app) {
  var tripController = require('../controllers/TripController');


  // todoList Routes
  app.route('/trip')
    .get(tripController.list_all_Trips)
    .post(tripController.create_a_Trip);


  app.route('/trip/:tripId')
    .get(tripController.get_a_Trip)
    .put(tripController.update_a_Trip)
    .delete(tripController.delete_a_Trip);
};