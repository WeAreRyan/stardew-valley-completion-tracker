var express = require('express');
var router = express.Router();
const gameSavesCtrl = require('../controllers/gameSaves');
const isLoggedIn = require('../config/auth');


router.get('/', gameSavesCtrl.index);
router.get('/new', gameSavesCtrl.new);
router.get('/:id', gameSavesCtrl.show);
router.get('/:id/edit', gameSavesCtrl.edit);

router.post('/', gameSavesCtrl.create);

router.put('/:id', gameSavesCtrl.update);

router.delete('/:id', isLoggedIn, gameSavesCtrl.delete);

module.exports = router;