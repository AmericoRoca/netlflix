'use strict'

const multipart = require('connect-multiparty');
var express = require('express');
var UserController = require('../controllers/user');
var md_auth = require('../middlewares/authenticated');

var api = express.Router();
var md_upload = multipart({uploadDir: 'backend/uploads/users'});


api.get('/test', md_auth.ensureAuth, UserController.test);
api.post('/save', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.put('/update/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/upload/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-user/:imageFile', UserController.getImageFile);

module.exports = api;