const mongoose = require('mongoose');

const bootcampSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a bootcamp title'],
      trim: true,
      minlength: [3, 'Bootcamp title must be at least 3 characters long'],
      maxlength: [100, 'Bootcamp title cannot exceed 100 characters'],
      unique: [true, 'Bootcamp title must be unique'],
      index: true
    },
    description: { type: String, required: true },
    level: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: String, required: true },
    tags: { type: [String], default: [] },
    features: { type: [String], default: [] },
    modules: { type: Array, default: [] }
  },
  {
    timestamps: true
  }
);

// Index for better query performance
bootcampSchema.index({ createdAt: -1 });
bootcampSchema.index({ title: 'text' });

module.exports = mongoose.model('Bootcamp', bootcampSchema);