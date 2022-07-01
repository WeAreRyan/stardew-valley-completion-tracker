var express = require('express');
var router = express.Router();
const gameSavesCtrl = require('../controllers/gameSaves');
const gameSaveCommentsCtrl = require('../controllers/gameSaveComments')
const isLoggedIn = require('../config/auth');

router.post('/gameSaves/:id/gameSaveComments', isLoggedIn, gameSaveCommentsCtrl.create);
router.delete('/gameSaveComments/:id', isLoggedIn, gameSaveCommentsCtrl.delete);

module.exports = router;