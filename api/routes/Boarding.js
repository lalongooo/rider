'use strict';
module.exports = function(app) {
  var boardingController = require('../controllers/BoardingController');


  // todoList Routes
  app.route('/boarding')
    .get(boardingController.list_all_boardings)
    .post(boardingController.create_a_boarding);


  app.route('/boarding/:boardingId')
    .get(boardingController.get_a_boarding)
    .put(boardingController.update_a_boarding)
    .delete(boardingController.delete_a_boarding);
};