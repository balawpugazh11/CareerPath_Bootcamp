const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  assignment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  file_url: { type: String, required: true },
  mentor_feedback: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);
