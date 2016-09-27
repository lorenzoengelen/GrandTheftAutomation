// == set up ===================================================
var express = require('express');
var bodyParser = require('body-parser');												// pull information from HTML POST
var morgan = require('morgan');																	// log requests to the console
var port = process.env.PORT || 8080;													  // set the port
var path = require('path');
var session = require('express-session');
var userController = require('./controllers/userController.js');

var app = express();

// == configuration ============================================
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({ extended: true }));             // parse application/x-www-form-urlencoded
app.use(morgan('dev'));                                         // log every request to the console
app.use(express.static(path.join(__dirname, '../../dist')));    // set static files location

// == routes ===================================================

app.use('/users', userController);                              // handles all requests to '/users'

// == listen ===================================================

app.listen(port, () => {
  console.log('app listening on port', port);
});