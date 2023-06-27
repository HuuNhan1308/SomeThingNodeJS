const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    _id: ObjectId,
    id: { type: Number },
    quote: { type: String, maxLength: 255 },
    author: { type: String, maxLength: 100 },
});

module.exports = mongoose.model('Course', Course);
