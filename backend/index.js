'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/netflix', (err,res)=>{
    if(err){
        throw err;
    } else {
        console.log("The database conection is working");

        app.listen(port, function(){
            console.log("Server listenning in http:localhost:"+port);
        });
    }
});