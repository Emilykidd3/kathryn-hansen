const mongoose = require("mongoose");

const { Schema } = mongoose;

const gallerySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
  },
  imageId: {
    type: String,
  },
  size: {
    type: String,
  },
  price: {
    type: Number,
    min: 0.99,
  },
  availability: {
    type: String,
  },
  image: {
    type: String,
  },
  // tag: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Tags'
  // },
});

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
