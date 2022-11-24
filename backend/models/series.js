'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeriesSchema = Schema({
    name: String,
    description: String,
    trailer: String,
    img: String
   
});

module.exports = mongoose.model('Series', SeriesSchema);

