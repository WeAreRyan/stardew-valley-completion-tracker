var express = require('express');
var router = express.Router();
var gameSavesCtrl = require('../controllers/gameSaves');
const isLoggedIn = require('../config/auth');


router.get('/', gameSavesCtrl.index);
router.get('/new', gameSavesCtrl.new);
router.get('/:id', gameSavesCtrl.show);

router.post('/', gameSavesCtrl.create);

// router.delete('/:id', savesCtrl.delete);

module.exports = router;