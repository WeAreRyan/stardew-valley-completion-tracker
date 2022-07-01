const GameSave = require('../models/gameSave');

module.exports = {
    create,
    delete: deleteGameSaveComment,
};

function create(req, res) {
    GameSave.findById(req.params.id, function (err, gameSave) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        console.log(req.body)
        gameSave.gameSaveComments.push(req.body)
        gameSave.save(function (err) {
            res.redirect(`/gameSaves/${gameSave._id}/`)
        })
    })
}

async function deleteGameSaveComment(req, res, next) {
    try {
        const gameSave = await GameSave.findOne({ 'gameSaveComments._id': req.params.id, 'gameSave.user': req.user._id })
        if (!gameSave) return res.redirect(`/gameSaves/${gameSave._id}/`)
        gameSave.gameSaveComments.remove(req.params.id)
        console.log(req.params.id)
        await gameSave.save()
        res.redirect(`/gameSaves/${gameSave._id}/`)
    } catch (err) {
        return next(err)
    }
}
