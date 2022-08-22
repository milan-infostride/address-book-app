const mongoose  = require('mongoose');
const Schema  = mongoose.Schema;

const messageSchema = new Schema({
    sent_by:{
        user_id:{
            type: Schema.Types.ObjectId,
            required: true
        },
        data: {
            type: 'object'
        },
        deleted: {
            type: 'boolean'
        },
        delivered_To: [
            {
                user_id:{
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'User'
                }
            }
        ],
        seen_by: [
            {
                user_id:{
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'User'
                }
            }
        ],
        replies: [
            {
                message_id:{
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'Message'
                }
            }
        ]
    }
})

module.exports = mongoose.model('Message',messageSchema);