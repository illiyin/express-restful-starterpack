'use strict'

exports.welcomeMessage = function(request, response) {
  response.status(200).json({
    message: 'Welcome to Express.js!'
  })
}
