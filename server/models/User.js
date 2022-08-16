const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    profile_url: {
        type: 'string',
        required: true
    },
    bio: {
        type: 'string',
        required: true
    },
    number: 'number',
    groups: [{
        group_id:{
            type: Schema.Types.ObjectId,
            required: false,
            ref:'groups'
        }
    }],
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    chat_areas: [{
        chat_id:{
            type: Schema.Types.ObjectId,
            required: false,
            ref:'chatAreas'
        }
    }]
})

module.exports = mongoose.model('User',userSchema)