const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  text: { type: String, required: true },
  imagePath: { type: String, required: true },
  fileName: { type: String },
  comments: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Data', DataSchema);