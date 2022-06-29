const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSaveSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User', required: true
    },
    saveName: {
        type: String, required: true
    },
    // Path true == Joja route, false == Community route
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
    wallnuts: {
        type: Boolean
    }
    
})

module.exports = mongoose.model('GameSave', gameSaveSchema)