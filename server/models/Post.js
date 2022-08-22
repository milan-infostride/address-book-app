const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    caption: {
        type: 'string',
        required: true
    },
    image_urls: [{
        type: String,
        required: true
    }],
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = mongoose.model('Post',postSchema);