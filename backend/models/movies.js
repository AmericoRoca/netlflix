'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MoviesSchema = Schema({
    name: String,
    description: String,
    trailer: String,
    img: String,

});

module.exports = mongoose.model('Movies', MoviesSchema);

