var express = require('express')
var bodyparser = require('body-parser')
var expressValidator = require('express-validator')
var helmet = require('helmet')
var morgan = require('morgan') // HTTP Logging

var app = express()
var port = process.env.port || 3000

// express configuration
app.use(
  bodyparser.urlencoded({
    extended: true
  })
)
// Morgan
app.use(morgan('combined'))
// Body Parser
app.use(bodyparser.json())
// Express validation
app.use(expressValidator())
// Express.js security with HTTP headers. https://helmetjs.github.io/
app.use(helmet())

// Middleware
require('./src/constants/middleware')(app)
// Router
require('./src/constants/router')(app)

app.listen(port, function() {
  console.log('Server is listening on port ' + port)
})
