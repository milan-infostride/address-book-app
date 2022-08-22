const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    admins: [{
        admin_id:{
            type: Schema.Types.ObjectId,
            required: true,
            ref:'User'
        }
    }],
    chat_area: {
        chat_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref:'ChatArea'
        }
    },
    profile_url: 'string',
    bio: 'string'

})

module.exports = mongoose.model('Group',groupSchema);