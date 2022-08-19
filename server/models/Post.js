const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    caption: {
        type: 'string',
        required: true
    },
    image_urls: [{
        type: 'string',
        required: true
    }],
    user: {
        type: Schema.Types.ObjectId,
        required: true
    }
})