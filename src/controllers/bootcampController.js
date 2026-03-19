const Bootcamp = require('../models/Bootcamp');

// GET all bootcamps
exports.getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.json(bootcamps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE bootcamp
exports.createBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create({
      name: req.body.name
    });

    res.json(bootcamp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET by ID
exports.getBootcampById = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.json(bootcamp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );

    if (!bootcamp) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.json(bootcamp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(404).json({ message: 'Not found' });
    }

    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};