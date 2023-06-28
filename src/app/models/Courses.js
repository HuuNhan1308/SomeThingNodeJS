const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    _id: ObjectId,
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
});

module.exports = mongoose.model('Course', Course);
