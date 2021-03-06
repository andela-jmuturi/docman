(function () {
  'use strict';

  var rolesController = require('../../controllers').rolesController;

  module.exports = function (app) {
    /**
     * List all roles in the system..
     */
    app.get('/api/roles', rolesController.list);
  };
})();
