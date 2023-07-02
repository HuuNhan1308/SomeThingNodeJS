const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String },
        videoID: { type: String, maxLength: 255, required: true },
        image: { type: String },
        level: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
