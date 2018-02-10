
//Your server.js file should require the basic npm packages we've used in class: express, 
//body-parser and path.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();

app.use(express.static("public"))

var PORT = process.env.PORT || 8080; 

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Application routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});