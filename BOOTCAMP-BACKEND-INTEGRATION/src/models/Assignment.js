const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  module_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true },
  instructions: { type: String, required: true },
  due_date: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);
