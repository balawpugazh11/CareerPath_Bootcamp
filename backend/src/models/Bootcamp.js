const mongoose = require('mongoose');

const bootcampSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a bootcamp name'],
      trim: true,
      minlength: [3, 'Bootcamp name must be at least 3 characters long'],
      maxlength: [100, 'Bootcamp name cannot exceed 100 characters'],
      unique: [true, 'Bootcamp name must be unique'],
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

bootcampSchema.index({ createdAt: -1 });
bootcampSchema.index({ name: 'text' });

module.exports = mongoose.model('Bootcamp', bootcampSchema);
