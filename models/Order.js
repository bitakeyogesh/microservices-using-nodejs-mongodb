const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  uuid: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  orderedDate: {
    type: Date,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('order', OrderSchema);
