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
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});


//Routes source
app.use('/api', user_routes);
app.use('/api', movies_routes);


module.exports = app;