const errorHandler = (err, req, res, next) => {
  console.error('Error Handler Caught:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
  });

  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation Error';
  }

  if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid ID format';
  }

  if (err.name === 'MongoServerError' && err.code === 11000) {
    statusCode = 400;
    message = 'Duplicate field value entered';
  }

  res.status(statusCode).json({
    success: false,
    message,
    error:
      process.env.NODE_ENV === 'development'
        ? err.message
        : 'Internal Server Error',
  });
};

module.exports = errorHandler;
