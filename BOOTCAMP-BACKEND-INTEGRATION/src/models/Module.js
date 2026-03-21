const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  bootcamp_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Bootcamp', required: true },
  week_number: { type: Number, required: true },
  title: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Module', moduleSchema);
