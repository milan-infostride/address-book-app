const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceOrderSchema = new Schema({
    services:[{
        type: Object
    }],
    confirmed: Boolean,
    ordered_at: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true 
    }
})

module.exports = mongoose.model('ServiceOrder',serviceOrderSchema)