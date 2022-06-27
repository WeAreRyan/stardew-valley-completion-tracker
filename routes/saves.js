var express = require('express');
var router = express.Router();
var savesCtrl = require('../controllers/saves');
const isLoggedIn = require('../config/auth');


router.get('/', savesCtrl.index);

module.exports = router;