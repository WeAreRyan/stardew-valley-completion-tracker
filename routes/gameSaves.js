var express = require('express');
var router = express.Router();
const gameSavesCtrl = require('../controllers/gameSaves');
const isLoggedIn = require('../config/auth');

// GET ROUTES
router.get('/', gameSavesCtrl.index);
router.get('/new', gameSavesCtrl.new);
router.get('/:id', gameSavesCtrl.show);
router.get('/:id/buildings', gameSavesCtrl.buildings);
router.get('/:id/edit', gameSavesCtrl.edit);

// POST ROUTES
router.post('/', gameSavesCtrl.create);

// PUT ROUTES
router.put('/:id', gameSavesCtrl.update);
router.put('/:id/updatebuildings', gameSavesCtrl.updateBuildings);

// DELETE ROUTES
router.delete('/:id', isLoggedIn, gameSavesCtrl.delete);

module.exports = router;