const GameSave = require('../models/GameSave');

module.exports = {
    index, 
    create, 
    new: newGameSave, 
    show, 
    // delete: deletegameSave, 
}

// function index(req, res) {
//     GameSave.find({}, function(err, gameSaves) {
//       res.render('gameSaves/index', { title: 'All Save Files', gameSaves });
//     });
//   }
  function index(req, res) {
    GameSave.find({}, function(err, gameSaves) {
      res.render('gameSaves/index', { title: 'All Save Files', gameSaves });
    });
  }

function newGameSave(req, res) {
    res.render('gameSaves/new', { title: 'New Save File'});
}

function show(req, res) {
    gameSave = GameSave.findById(req.params.id, function(err, gameSave){
        res.render('gameSaves/show', { title: 'Save File Details'})
        console.log(gameSave)
        return gameSave;
    })
}

// async function deleteSave(req, res) {
//     try {
//         const save = await Save.findOne({ 'saves._id' : req.params.id, 'saves.user' : req})
//         if(!save) return res.redirect('/saves')
//         save.remove(req.params.id)
//         await save.save()
//         res.redirect(`/saves/${save._id}`)
//     } catch(err) {
//         return next(err)
//     }
// }


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
    req.body.wallnuts = !!req.body.wallnuts;
    const gameSave = new GameSave(req.body);
    console.log(req.body)
    gameSave.save(function(err) {
        if(err) {
            console.log(err)
        }
    })
    res.redirect('/gameSaves')
}

