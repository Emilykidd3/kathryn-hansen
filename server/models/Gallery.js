const mongoose = require('mongoose');

const { Schema } = mongoose;

const gallerySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
      },
    description: {
        type: String,
        required: true,
        trim: true
        },
    image: {
        type: String
        },
    link: {
        type: String
        },
    tag: {
        type: Array
        },
    size: {
        type: String
        },
    price: {
        type: Number,
        min: 0.99
        },
    availability: {
        type: String,
        },
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;