const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip || req.connection?.remoteAddress || 'unknown';

  const startTime = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    const statusCode = res.statusCode;
    
    // Log based on status code
    if (statusCode >= 400) {
      console.error(`[${timestamp}] ${method} ${url} - Status: ${statusCode} - ${duration}ms - IP: ${ip}`);
    } else {
      console.log(`[${timestamp}] ${method} ${url} - Status: ${statusCode} - ${duration}ms - IP: ${ip}`);
    }
  });

  next();
};

module.exports = logger;