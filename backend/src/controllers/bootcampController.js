const mongoose = require('mongoose');
const Bootcamp = require('../models/Bootcamp');

exports.getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps,
    });
  } catch (error) {
    console.error('GET /bootcamps error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bootcamps',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : 'Internal Server Error',
    });
  }
};

exports.createBootcamp = async (req, res) => {
  try {
    const bootcamp = new Bootcamp({
      name: req.body.name,
    });

    const savedBootcamp = await bootcamp.save();

    res.status(201).json({
      success: true,
      message: 'Bootcamp created successfully',
      data: savedBootcamp,
    });
  } catch (error) {
    console.error('POST /bootcamps error:', error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A bootcamp with this name already exists',
        field: Object.keys(error.keyPattern)[0],
      });
    }

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages,
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error creating bootcamp',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : 'Internal Server Error',
    });
  }
};

exports.getBootcampById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid bootcamp ID format',
      });
    }

    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: 'Bootcamp not found',
        id: req.params.id,
      });
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    console.error('GET /bootcamps/:id error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bootcamp',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : 'Internal Server Error',
    });
  }
};

exports.updateBootcamp = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid bootcamp ID format',
      });
    }

    const bootcamp = await Bootcamp.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true, runValidators: true }
    );

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: 'Bootcamp not found',
        id: req.params.id,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bootcamp updated successfully',
      data: bootcamp,
    });
  } catch (error) {
    console.error('PUT /bootcamps/:id error:', error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A bootcamp with this name already exists',
        field: Object.keys(error.keyPattern)[0],
      });
    }

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages,
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error updating bootcamp',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : 'Internal Server Error',
    });
  }
};

exports.deleteBootcamp = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid bootcamp ID format',
      });
    }

    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: 'Bootcamp not found',
        id: req.params.id,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bootcamp deleted successfully',
      data: bootcamp,
    });
  } catch (error) {
    console.error('DELETE /bootcamps/:id error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting bootcamp',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : 'Internal Server Error',
    });
  }
};
