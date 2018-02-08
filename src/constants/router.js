'use strict'

module.exports = function(app) {
  // MySQL Connector
  var connection = require('../config/mysql-connector')
  // DEFINE ROUTE

  require('../routes/entry-point')(app)
}
