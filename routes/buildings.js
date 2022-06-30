var express = require('express');
var router = express.Router();
const gameSavesCtrl = require('../controllers/gameSaves');
const buildingsCtrl = require('../controllers/gameSaveComments')
const isLoggedIn = require('../config/auth');