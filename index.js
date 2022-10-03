var express = require('express');
var app = express();
var https = require('https');
var fs = require('fs'); 
const port = 80;


https.createServer({
    cert: fs.readFileSync(),
    key: fs.readFileSync()
    },app).listen(port, function(){
        console.log('Server http working on port 80..');
});


app.get('/', function(req,res){
    res.send('Hello world');
    console.log('get petition works');
})