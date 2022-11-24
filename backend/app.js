'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Routes
var user_routes = require('./routes/user');
var movies_routes = require('./routes/movies');



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//Headers Config HTTP



//Routes source
app.use('/api', user_routes);
app.use('/api', movies_routes);


module.exports = app;