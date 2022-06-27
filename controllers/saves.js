const Save = require('../models/save');

module.exports = {
    index, 
}

function index(req, res) {
    res.render('saves/index', { title: 'Save Files',})
}