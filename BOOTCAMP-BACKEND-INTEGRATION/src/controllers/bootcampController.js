const Bootcamp = require('../models/Bootcamp');
const mongoose = require('mongoose');

/**
 * GET all bootcamps
 */
exports.getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps
    });
  } catch (error) {
    console.error('GET /bootcamps error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bootcamps',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

/**
 * CREATE bootcamp
 */
exports.createBootcamp = async (req, res) => {
  try {
    // Input validation is handled by validation middleware
    const bootcamp = new Bootcamp({
      title: req.body.title,
      description: req.body.description,
      level: req.body.level,
      duration: req.body.duration,
      price: req.body.price,
      tags: req.body.tags,
      features: req.body.features,
      modules: req.body.modules
    });

    const savedBootcamp = await bootcamp.save();

    res.status(201).json({
      success: true,
      message: 'Bootcamp created successfully',
      data: savedBootcamp
    });
  } catch (error) {
    console.error('POST /bootcamps error:', error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A bootcamp with this title already exists',
        field: Object.keys(error.keyPattern)[0]
      });
    }

    // Handle validation error from MongoDB
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error creating bootcamp',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

/**
 * GET bootcamp by ID
 */
exports.getBootcampById = async (req, res) => {
  try {
    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid bootcamp ID format'
      });
    }

    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: 'Bootcamp not found',
        id: req.params.id
      });
    }

    res.status(200).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    console.error('GET /bootcamps/:id error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bootcamp',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

/**
 * UPDATE bootcamp
 */
exports.updateBootcamp = async (req, res) => {
  try {
    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid bootcamp ID format'
      });
    }

    // Input validation is handled by validation middleware
    const bootcamp = await Bootcamp.findByIdAndUpdate(
      req.params.id,
      { 
        title: req.body.title,
        description: req.body.description,
        level: req.body.level,
        duration: req.body.duration,
        price: req.body.price,
        tags: req.body.tags,
        features: req.body.features,
        modules: req.body.modules
      },
      { new: true, runValidators: true }
    );

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: 'Bootcamp not found',
        id: req.params.id
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bootcamp updated successfully',
      data: bootcamp
    });
  } catch (error) {
    console.error('PUT /bootcamps/:id error:', error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A bootcamp with this title already exists',
        field: Object.keys(error.keyPattern)[0]
      });
    }

    // Handle validation error from MongoDB
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error updating bootcamp',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

/**
 * DELETE bootcamp
 */
exports.deleteBootcamp = async (req, res) => {
  try {
    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid bootcamp ID format'
      });
    }

    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: 'Bootcamp not found',
        id: req.params.id
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bootcamp deleted successfully',
      data: bootcamp
    });
  } catch (error) {
    console.error('DELETE /bootcamps/:id error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting bootcamp',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};