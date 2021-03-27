const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  uuid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  address:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('user', UserSchema);
