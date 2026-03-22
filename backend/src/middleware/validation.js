const { body, param, validationResult } = require('express-validator');

const bootcampValidationRules = () => [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Bootcamp name is required')
    .isLength({ min: 3, max: 100 })
    .withMessage('Bootcamp name must be between 3 and 100 characters'),
];

const bootcampIdValidationRules = () => [
  param('id').isMongoId().withMessage('Invalid bootcamp ID'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({
    success: false,
    message: 'Validation error',
    errors: errors.array().map((error) => ({
      field: error.path,
      message: error.msg,
    })),
  });
};

module.exports = {
  bootcampValidationRules,
  bootcampIdValidationRules,
  handleValidationErrors,
};
