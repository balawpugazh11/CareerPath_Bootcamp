const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip || req.connection.remoteAddress;

  // Store start time for response duration
  const startTime = Date.now();

  // Capture the original response.json method
  const originalJson = res.json;

  // Override res.json to log response details
  res.json = function (data) {
    const duration = Date.now() - startTime;
    const statusCode = res.statusCode;

    console.log(`[${timestamp}] ${method} ${url} - Status: ${statusCode} - ${duration}ms - IP: ${ip}`);

    // Call the original json method
    return originalJson.call(this, data);
  };

  // Log errors if they occur
  const originalSend = res.send;
  res.send = function (data) {
    const duration = Date.now() - startTime;
    const statusCode = res.statusCode;

    if (statusCode >= 400) {
      console.error(`[${timestamp}] ${method} ${url} - Status: ${statusCode} - ${duration}ms - IP: ${ip}`);
    }

    return originalSend.call(this, data);
  };

  next();
};

module.exports = logger;