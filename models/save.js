const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saveSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User', required: true
    },
    saveName: {
        type: String, required: true
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
    monsers: {
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
    Recipes: {
        type: Boolean
    }, 
    Crafting: {
        type: Boolean, 
    }, 
    Fish: {
        type: Boolean
    }, 
    Wallnuts: {
        type: Boolean
    }
    
})

module.exports = mongoose.model('Save', saveSchema)