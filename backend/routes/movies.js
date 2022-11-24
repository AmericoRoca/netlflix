'use strict'

const multipart = require('connect-multiparty');
var express = require('express');
var MoviesController = require('../controllers/movies');
var md_auth = require('../middlewares/authenticated');

var api = express.Router();
var md_upload = multipart({uploadDir: 'backend/uploads/movies'});


api.get('/movie/:id', md_auth.ensureAuth, MoviesController.getMovie);
api.get('/get-movies/:page?', md_auth.ensureAuth, MoviesController.getMovies);
api.post('/movies', md_auth.ensureAuth, MoviesController.saveMovie);
api.put('/edit-movie/:id', md_auth.ensureAuth, MoviesController.updateMovie);
api.delete('/delete-movie/:id', md_auth.ensureAuth, MoviesController.deleteMovie);
api.post('/upload-image-movie/:id', [md_auth.ensureAuth, md_upload], MoviesController.uploadImage);
api.get('/get-image-movie/:imageFile', MoviesController.getImageFile);
api.post('/upload-video-movie/:id', [md_auth.ensureAuth, md_upload], MoviesController.uploadTrailer);
api.get('/get-video-movie/:videoFile', MoviesController.getTrailer);



module.exports = api;