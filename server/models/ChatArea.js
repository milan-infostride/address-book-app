const mongoose  = require('mongoose');
const Schema  = mongoose.Schema;

const chatAreaSchema = new Schema({
    users: [
        {
            user_id:{
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'users'
            }
        }
    ],
    messages: [
        {
            message_id:{
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'users'
            }
        }
    ]
})

module.exports = mongoose.model('ChatArea',chatAreaSchema);