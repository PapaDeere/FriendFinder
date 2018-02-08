
//Your server.js file should require the basic npm packages we've used in class: express, 
//body-parser and path.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT;

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Application routes
require(path.join(__dirname, './app/routing/apiRoutes'))();
require(path.join(__dirname, './app/routing/htmlRoutes'))();

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});