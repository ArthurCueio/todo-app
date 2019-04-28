const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  desc: {type: String, required: true},
  /* Dates stored as Strings. They should be parsed by moment.js */
  created: {type: String, required: true},
  due: String,
});

module.exports = mongoose.model('Todo', todoSchema);
