const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const getDb = require('../conection').getDb;

const ServiceOrder = require('../models/ServiceOrder');

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
        
            type: Schema.Types.ObjectId,
            required: false,
            ref:'Group'
        
    }],
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    chat_areas: [{
        
            type: Schema.Types.ObjectId,
            required: false,
            ref:'ChatArea'
       
    }],
    followers: [{
      
            type: Schema.Types.ObjectId,
            required: false,
            ref:'User'
       
    }],
    posts:[{
       type: Schema.Types.ObjectId,
        required: false,
        ref: 'Post'
    }],
    is_private: {
        type: 'boolean',
        default: false
    },
    password: {
        type: 'string',
        required: true
    },
    services: [{
        type: Schema.Types.ObjectId,
        ref: 'Services',
        required: true
    }],
    service_orders: [{
        type: Schema.Types.ObjectId,
        ref: 'ServiceOrder',
        required: true        
    }]
})
userSchema.statics.findByEmail = function(email){
    let db = getDb();
    return  db.collection('users').findOne({email:{$eq:email}})
}
userSchema.methods.getServiceOrderbyId = function(serviceOrderId){
    let serviceOrderIdExist = this.service_orders.includes(serviceOrderId.toString());
    if(serviceOrderIdExist){
       return ServiceOrder.findById(serviceOrderId);
    }
    let error = new Error();
    error.message = 'service order not found';
    error.statusCode = 404;
    console.log('user service order find error----',error);
    throw error;
}
module.exports = mongoose.model('User',userSchema)