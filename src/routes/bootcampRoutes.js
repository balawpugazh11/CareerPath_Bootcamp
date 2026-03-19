const express = require('express');
const router = express.Router();

const {
  getBootcamps,
  createBootcamp,
  getBootcampById,
  updateBootcamp,
  deleteBootcamp
} = require('../controllers/bootcampController');

router.get('/', getBootcamps);
router.post('/', createBootcamp);
router.get('/:id', getBootcampById);
router.put('/:id', updateBootcamp);
router.delete('/:id', deleteBootcamp);

module.exports = router; // 🔥 MUST BE THERE