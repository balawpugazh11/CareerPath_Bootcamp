const { validationResult, body, param } = require('express-validator');
const mongoose = require('mongoose');

/**
 * Validation rules for bootcamp operations
 */
const bootcampValidationRules = () => {
  return [
    body('title')
      .trim()
      .notEmpty()
      .withMessage('Bootcamp title is required')
      .isString()
      .withMessage('Bootcamp title must be a string')
      .isLength({ min: 3, max: 100 })
      .withMessage('Bootcamp title must be between 3 and 100 characters'),
    body('description').notEmpty().withMessage('Description is required'),
    body('level').notEmpty().withMessage('Level is required'),
    body('duration').notEmpty().withMessage('Duration is required'),
    body('price').notEmpty().withMessage('Price is required'),
  ];
};

/**
 * Validation rules for bootcamp ID parameter
 */
const bootcampIdValidationRules = () => {
  return [
    param('id')
      .custom((value) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          throw new Error('Invalid bootcamp ID format');
        }
        return true;
      })
  ];
};

/**
 * Middleware to handle validation errors
 */
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: errors.array().map(err => ({
        field: err.path || err.param || 'unknown',
        message: err.msg
      }))
    });
  }
  next();
};

module.exports = {
  bootcampValidationRules,
  bootcampIdValidationRules,
  handleValidationErrors
};