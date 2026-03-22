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
    slug: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      trim: true,
    },
    shortTitle: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    summary: {
      type: String,
      trim: true,
    },
    level: {
      type: String,
      trim: true,
    },
    duration: {
      type: String,
      trim: true,
    },
    price: {
      type: String,
      trim: true,
    },
    cohortStart: {
      type: String,
      trim: true,
    },
    paymentPlan: {
      type: String,
      trim: true,
    },
    format: {
      type: String,
      trim: true,
    },
    mentor: {
      name: String,
      role: String,
      company: String,
    },
    tags: [String],
    outcomes: [String],
    features: [String],
    modules: [
      {
        week: Number,
        title: String,
        lessons: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

bootcampSchema.index({ createdAt: -1 });
bootcampSchema.index({ name: 'text' });

module.exports = mongoose.model('Bootcamp', bootcampSchema);
