const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dummyDataSchema = new Schema({
    name: String
})

module.exports = mongoose.model('DummyData',dummyDataSchema)