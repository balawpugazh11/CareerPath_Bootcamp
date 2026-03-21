const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  module_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true },
  title: { type: String, required: true },
  video_url: { type: String },
  materials: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Lesson', lessonSchema);
