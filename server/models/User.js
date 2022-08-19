const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const getDb = require('../conection').getDb;

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
    }],
    followers: [{
        user_id:{
            type: Schema.Types.ObjectId,
            required: false,
            ref:'users'
        }
    }],
    posts:[{
        post_id:{
            type: Schema.Types.ObjectId,
            required: false,
            ref: 'posts'
        }
    }],
    is_private: {
        type: 'boolean',
        default: false
    },
    password: {
        type: 'string',
        required: true
    }
})
userSchema.statics.findByEmail = function(email){
    let db = getDb();
    return  db.collection('users').findOne({email:{$eq:email}})
}
module.exports = mongoose.model('User',userSchema)