const express = require('express');

const {
  getBootcamps,
  createBootcamp,
  getBootcampById,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcampController');
const {
  bootcampValidationRules,
  bootcampIdValidationRules,
  handleValidationErrors,
} = require('../middleware/validation');

const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// GET all bootcamps
router.get('/', getBootcamps);
router.post(
  '/',
  protect,
  authorize('admin'),
  bootcampValidationRules(),
  handleValidationErrors,
  createBootcamp
);
router.get(
  '/:id',
  bootcampIdValidationRules(),
  handleValidationErrors,
  getBootcampById
);
router.put(
  '/:id',
  protect,
  authorize('admin'),
  bootcampIdValidationRules(),
  bootcampValidationRules(),
  handleValidationErrors,
  updateBootcamp
);
router.delete(
  '/:id',
  protect,
  authorize('admin'),
  bootcampIdValidationRules(),
  handleValidationErrors,
  deleteBootcamp
);

module.exports = router;
