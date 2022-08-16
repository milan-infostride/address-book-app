const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    admins: [{
        admin_id:{
            type: Schema.Types.ObjectId,
            required: true,
            ref:'users'
        }
    }],
    chat_area: {
        chat_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref:'chatAreas'
        }
    },
    profile_url: 'string',
    bio: 'string'

})

module.exports = mongoose.model('Group',groupSchema);