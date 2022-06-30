const GameSave = require('../models/GameSave');

module.exports = {
    index,
    create,
    new: newGameSave,
    show,
    delete: deletegameSave,
    edit, 
    update, 
}


function index(req, res) {
    if(!req.user) {
        res.redirect('/auth/google')
    } else {
    GameSave.find({}, function (err, gameSaves) {
        res.render('gameSaves/index', { title: 'All Save Files', gameSaves });
    })};
}

function newGameSave(req, res) {
    if(!req.user) {
        res.redirect('/auth/google')
    } else {
    res.render('gameSaves/new', { title: 'New Save File' });
}}

function show(req, res) {
    if(!req.user) {
        res.redirect('/auth/google')
    } else {
    gameSave = GameSave.findById(req.params.id, function (err, gameSave) {
        res.render('gameSaves/show', { title: 'Save File Details', gameSave })
        return gameSave;
    })}
}


function edit(req, res) {
    gameSave.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, gameSave) {
        console.log('hello')
      if (err || !gameSave) return res.redirect('/gameSaves');
      console.log(gameSave)
      res.render(`gameSaves/edit`, {gameSave});
    });
  }


// function edit(req, res) {
//     if(!req.user) {
//         res.redirect('/auth/google')
//     } else {
//     gameSave = GameSave.findById(req.params.id, function(err, gameSave) {
//         console.log(req.params.id)
//     res.render(`gameSaves/edit`, { title: 'Save File Details', gameSave })
//     })
// }
// }


async function deletegameSave(req, res, next) {
    try {
        const gameSave = await GameSave.findOne({ 'gameSaves._id': req.params.id, 'gameSaves.user': req })
        if (!gameSave) return res.redirect('/gameSaves')
        gameSave.remove(req.params.id)
        await gameSave.save()
        res.redirect('/gameSaves/')
    } catch (err) {
        return next(err)
    }
}


function update(req, res) {
    gameSave.findOneAndUpdate(
      {_id: req.params.id, userRecommending: req.user._id},
      req.body,
      {new: true},
      function(err, gameSave) {
        if (err || !gameSave) return res.redirect('/gameSaves');
        res.redirect(`gameSaves/${gameSave._id}`);
      }
    );
  }


function create(req, res) {
    req.body.user = req.user._id;
    req.body.community = !!req.body.community;
    req.body.items = !!req.body.items;
    req.body.buildings = !!req.body.buildings;
    req.body.monsters = !!req.body.monsters;
    req.body.friendship = !!req.body.friendship;
    req.body.skills = !!req.body.skills;
    req.body.stardrops = !!req.body.stardrops;
    req.body.recipes = !!req.body.recipes;
    req.body.crafting = !!req.body.Crafting;
    req.body.fish = !!req.body.fish;
    req.body.walnuts = !!req.body.walnuts;
    const gameSave = new GameSave(req.body);
    console.log(req.body)
    gameSave.save(function (err) {
        if (err) {
            console.log(err)
        }
    })
    res.redirect('/gameSaves')
}
