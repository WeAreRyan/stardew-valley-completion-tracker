const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSaveCommentSchema = new Schema({
    content: {
        type: String, required: true
    },
    user: {
        type: Schema.Types.ObjectId, ref: 'User', required: true
    },
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});

const saveBuildingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User', required: true
    },
    earthObelisk: {
        type: Boolean
    },
    waterObelisk: {
        type: Boolean
    },
    desertObelisk: {
        type: Boolean
    },
    islandObelisk: {
        type: Boolean
    },
    goldClock: {
        type: Boolean
    },
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});

const gameSaveSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User', required: true
    },
    saveName: {
        type: String, required: true
    },
    completionPath: {
        type: String,
        enum: ['Community', "Joja"],
        required: true
    },
    community: {
        type: Boolean
    },
    items: {
        type: Boolean
    },
    buildings: {
        type: Boolean
    },
    monsters: {
        type: Boolean
    },
    friendship: {
        type: Boolean
    },
    skills: {
        type: Boolean
    },
    stardrops: {
        type: Boolean
    },
    recipes: {
        type: Boolean
    },
    crafting: {
        type: Boolean,
    },
    fish: {
        type: Boolean
    },
    walnuts: {
        type: Boolean
    },
    gameSaveComments: [gameSaveCommentSchema],
    saveBuildings: [saveBuildingSchema],
})

module.exports = mongoose.model('GameSave', gameSaveSchema)