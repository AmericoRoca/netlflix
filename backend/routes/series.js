'use strict'

const multipart = require('connect-multiparty');
var express = require('express');
var SeriesController = require('../controllers/series');
var md_auth = require('../middlewares/authenticated');

var api = express.Router();
var md_upload = multipart({uploadDir: 'backend/uploads/series'});


api.get('/get-serie/:id', md_auth.ensureAuth, SeriesController.getMovie);
api.get('/get-movies/:page?', md_auth.ensureAuth, SeriesController.getMovies);
api.post('/save-serie', md_auth.ensureAuth, SeriesController.saveMovie);
api.put('/edit-serie/:id', md_auth.ensureAuth, SeriesController.updateMovie);
api.delete('/delete-serie/:id', md_auth.ensureAuth, SeriesController.deleteMovie);
api.post('/upload-image-serie/:id', [md_auth.ensureAuth, md_upload], SeriesController.uploadImage);
api.get('/get-image-serie/:imageFile', SeriesController.getImageFile);
api.post('/upload-video-serie/:id', [md_auth.ensureAuth, md_upload], SeriesController.uploadTrailer);
api.get('/get-video-serie/:videoFile', SeriesController.getTrailer);



module.exports = api;