const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
});

const empCollection = mongoose.model('empcollection', empSchema);

module.exports = empCollection;
