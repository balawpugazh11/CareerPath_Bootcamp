const express = require('express');
const router = express.Router();

const {
  getBootcamps,
  createBootcamp,
  getBootcampById,
  updateBootcamp,
  deleteBootcamp
} = require('../controllers/bootcampController');

const {
  bootcampValidationRules,
  bootcampIdValidationRules,
  handleValidationErrors
} = require('../middleware/validation');

// GET all bootcamps
router.get('/', getBootcamps);

// CREATE bootcamp with validation
router.post(
  '/',
  bootcampValidationRules(),
  handleValidationErrors,
  createBootcamp
);

// GET bootcamp by ID with validation
router.get(
  '/:id',
  bootcampIdValidationRules(),
  handleValidationErrors,
  getBootcampById
);

// UPDATE bootcamp with validation
router.put(
  '/:id',
  bootcampIdValidationRules(),
  bootcampValidationRules(),
  handleValidationErrors,
  updateBootcamp
);

// DELETE bootcamp with validation
router.delete(
  '/:id',
  bootcampIdValidationRules(),
  handleValidationErrors,
  deleteBootcamp
);

module.exports = router;