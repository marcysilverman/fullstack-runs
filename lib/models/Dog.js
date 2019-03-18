const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 5
  },
  age: {
    type: String,
    required: true, 
  },
  weight: {
    type: String,
    required: true, 
  }
});

module.exports = mongoose.model('Dog', dogSchema);
