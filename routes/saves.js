var express = require('express');
var router = express.Router();
var savesCtrl = require('../controllers/saves');

router.get('/', savesCtrl.index);

module.exports = router;