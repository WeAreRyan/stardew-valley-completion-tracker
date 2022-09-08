const GameSave = require('../models/gameSave');

module.exports = {
    index,
    create,
    new: newGameSave,
    show,
    delete: deletegameSave,
    edit,
    update,
    buildings,
    updateBuildings,
}


function buildings(req, res) {
    console.log(";LAKSDJFOISDDJF")
        if (!req.user) {
            res.redirect('/auth/google')
        } else {
            gameSave = GameSave.findById(req.params.id, function (err, gameSave) {
                res.render('saveBuildings/show', { title: 'Save Building Details', gameSave })
                console.log(gameSave)
                return gameSave;
            })
        }
    }

async function updateBuildings(req, res) {
    try {
        console.log(req.params.id)
        const save = await GameSave.findById(req.params.id);
        console.log(save)
        Object.assign(save, req.body);
        save.save()
        res.send({ data: save })
    } catch {
        res.status(404).send({ error: "Save data not found"})
    }
}

function index(req, res) {
    if (!req.user) {
        res.redirect('/auth/google')
    } else {
        GameSave.find({}, function (err, gameSaves) {
            res.render('gameSaves/index', { title: 'All Save Files', gameSaves });
        })
    };
}

function newGameSave(req, res) {
    if (!req.user) {
        res.redirect('/auth/google')
    } else {
        res.render('gameSaves/new', { title: 'New Save File' });
    }
}

function show(req, res) {
    if (!req.user) {
        res.redirect('/auth/google')
    } else {
        gameSave = GameSave.findById(req.params.id, function (err, gameSave) {
            res.render('gameSaves/show', { title: 'Save File Details', gameSave })
            return gameSave;
        })
    }
}

async function edit(req, res) {
    if (!req.user) {
        res.redirect('/auth/google')
    } else {
        GameSave.findById(req.params.id, function (err, gameSave) {
            res.render(`gameSaves/edit`, { title: 'Save File Details', gameSave })
        })
    }
}


async function deletegameSave(req, res, next) {
    try {
        const gameSave = await GameSave.findOne({ 'gameSaves._id': req.params.id, 'gameSaves.user': req })
        if (!gameSave) return res.redirect(`/gameSaves/`)
        gameSave.remove(req.params.id)
        await gameSave.save()
        res.redirect(`/gameSaves/`)
    } catch (err) {
        console.log(err)
        res.redirect(`/gameSaves/`)
        return next(err)
    }
}

function update(req, res) {
    if (!req.user) {
        res.redirect('/auth/google')
    } else {
        req.body.user = req.user._id;
        req.body.community = !!req.body.community;
        req.body.items = !!req.body.items;
        req.body.buildings = !!req.body.buildings;
        req.body.monsters = !!req.body.monsters;
        req.body.friendship = !!req.body.friendship;
        req.body.skills = !!req.body.skills;
        req.body.stardrops = !!req.body.stardrops;
        req.body.recipes = !!req.body.recipes;
        req.body.crafting = !!req.body.crafting;
        req.body.fish = !!req.body.fish;
        req.body.walnuts = !!req.body.walnuts;

        GameSave.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            function (err, gameSave) {
                if (err || !gameSave) return res.redirect('/gameSave');
                res.redirect(`/gameSaves/${gameSave._id}/`);
            }
        )
    };
}



function create(req, res) {
    if (!req.user) {
        res.redirect('/auth/google')
    } else {
        req.body.user = req.user._id;
        req.body.community = !!req.body.community;
        req.body.items = !!req.body.items;
        req.body.buildings = !!req.body.buildings;
        req.body.monsters = !!req.body.monsters;
        req.body.friendship = !!req.body.friendship;
        req.body.skills = !!req.body.skills;
        req.body.stardrops = !!req.body.stardrops;
        req.body.recipes = !!req.body.recipes;
        req.body.crafting = !!req.body.crafting;
        req.body.fish = !!req.body.fish;
        req.body.walnuts = !!req.body.walnuts;
        const gameSave = new GameSave(req.body);
        gameSave.save(function (err) {
            if (err) {
                console.log(err)
            }
        })
    }
    res.redirect('/gameSaves')
}

