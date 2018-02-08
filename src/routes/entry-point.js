'use strict'
var express = require('express')

module.exports = function(app) {
  var entryPoint = express.Router()
  var entryList = require('../controllers/entry-list')

  entryPoint.route('/').get(entryList.welcomeMessage)

  app.use('/', entryPoint)
}
