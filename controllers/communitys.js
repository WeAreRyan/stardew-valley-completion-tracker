const Community = require('../models/community');

module.exports = {
    index, 
    show, 
}

function index(req, res) {
    res.render('communitys/index', { title: 'Update Community Progress',})
}

function show(req, res) {
    res.render('community/show', { title: "Community Progress,"})
}