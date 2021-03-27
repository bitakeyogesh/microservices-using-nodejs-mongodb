const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  uuid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('book', BookSchema);
