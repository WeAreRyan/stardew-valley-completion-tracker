const mongoose = require('mongoose')
const Schema = mongoose.Schema


const communityCommentsSchema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true
});

const communitySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    minecars: {
        type: Boolean
    },
    panning: {
        type: Boolean,
    },
    bridge: {
        type: Boolean
    },
    greenhouse: {
        type: Boolean
    },
    bus: {
        type: Boolean
    },
    theater: {
        type: Boolean
    },

    craftsRoom: {
        type: Boolean
    },
    pantry: {
        type: Boolean
    },
    fishTank: {
        type: Boolean
    },
    boilerRoom: {
        type: Boolean
    },
    boilerRoom: {
        type: Boolean
    },
    bulletinBoard: {
        type: Boolean
    },
    vault: {
        type: Boolean
    },
    missingBundle: {
        type: Boolean
    },

    communityComments: [communityCommentsSchema]
})


module.exports = mongoose.model('Community', communitySchema)

