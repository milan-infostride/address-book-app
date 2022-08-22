const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    caption: {
        type: 'string',
        required: true
    },
    images: [{
        type: Object,
        required: true
    }],
    video: {
        type: Object
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = mongoose.model('Post',postSchema);