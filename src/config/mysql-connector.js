'use strict'
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
})

connection.connect(function(err) {
  if (err) {
    console.log('Something wrong with MySQL database connection')
    connection.end()
  } else {
    console.log('Success Connection MySQL')
  }
})

module.exports = connection
