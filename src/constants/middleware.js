'use strict'

module.exports = function(app) {
  app.use(function(req, res, next) {
    next()
  })
}
