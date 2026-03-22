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

const router = express.Router();

router.get('/', getBootcamps);
router.post(
  '/',
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
  bootcampIdValidationRules(),
  bootcampValidationRules(),
  handleValidationErrors,
  updateBootcamp
);
router.delete(
  '/:id',
  bootcampIdValidationRules(),
  handleValidationErrors,
  deleteBootcamp
);

module.exports = router;
