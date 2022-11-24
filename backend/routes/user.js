'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var md_auth = require('../middlewares/authenticated');

var api = express.Router();

api.get('/test', md_auth.ensureAuth, UserController.test);
api.post('/save', UserController.saveUser);
api.post('/login', UserController.loginUser);

module.exports = api;