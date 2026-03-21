const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bootcamp_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Bootcamp', required: true },
  completion_date: { type: Date, default: Date.now },
  certificate_url: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);
