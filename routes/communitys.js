var express = require('express');
var router = express.Router();
var communitysCtrl = require('../controllers/communitys');
const isLoggedIn = require('../config/auth');


router.get('/', communitysCtrl.index);

module.exports = router;