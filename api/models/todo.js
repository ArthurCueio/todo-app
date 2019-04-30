const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {type: String, require: true},
  desc: {type: String, required: true},
  /* Dates stored as Strings. They should be parsed by moment.js */
  created: {type: String, required: true},
});

module.exports = mongoose.model('Todo', todoSchema);
