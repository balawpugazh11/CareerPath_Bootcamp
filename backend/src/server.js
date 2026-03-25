require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const bootcampRoutes = require('./routes/bootcampRoutes');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');
const { protect } = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Security & Parsing Middleware (BEFORE routes)
 */
app.use(helmet());
app.use(express.json({ limit: process.env.MAX_REQUEST_SIZE || '10mb' }));
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

/**
 * Logging Middleware
 */
app.use(logger);

/**
 * Static Files
 */
const path = require('path');
app.use('/test-ui', express.static(path.join(__dirname, 'utils')));

/**
 * Health Check Route
 */
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend running with MongoDB 🚀',
    environment: NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

/**
 * API Routes
 */
app.use('/api/bootcamps', bootcampRoutes);
app.use('/api/auth', authRoutes);

// Additional BRD endpoints (Stubs for future integration)
app.post('/api/bootcamps/:id/enroll', protect, (req, res) => res.json({ success: true, message: 'Enrolled successfully' }));
app.get('/api/bootcamps/:id/modules', protect, (req, res) => res.json({ success: true, count: 0, data: [] }));
app.post('/api/assignments/submit', protect, (req, res) => res.json({ success: true, message: 'Assignment submitted' }));
app.get('/api/users/progress', protect, (req, res) => res.json({ success: true, data: { progress: 0 } }));
app.get('/api/certificates/download', protect, (req, res) => res.json({ success: true, message: 'Certificate downloaded' }));

/**
 * 404 Handler - For undefined routes
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl,
    method: req.method,
    availableRoutes: [
      'GET    /',
      'GET    /api/bootcamps',
      'POST   /api/bootcamps',
      'GET    /api/bootcamps/:id',
      'PUT    /api/bootcamps/:id',
      'DELETE /api/bootcamps/:id'
    ]
  });
});

/**
 * Global Error Handler Middleware (MUST be last)
 */
app.use(errorHandler);

/**
 * Initialize Database Connection and Start Server
 */
const startServer = async () => {
  try {
    // Connect to Database
    await connectDB();

    // Start Server
    const server = app.listen(PORT, () => {
      console.log(`
╔═══════════════════════════════════════╗
║   ✓ Server Started Successfully       ║
╠═══════════════════════════════════════╣
║ Environment: ${NODE_ENV.padEnd(26)} ║
║ Port: ${PORT.toString().padEnd(32)} ║
║ URL: http://localhost:${PORT.toString().padEnd(22)} ║
║ API Docs: http://localhost:${PORT.toString().padEnd(19)} /test-ui ║
╚═══════════════════════════════════════╝
      `);
    });

    /**
     * Graceful Shutdown
     */
    const gracefulShutdown = async (signal) => {
      console.log(`\n${signal} received. Shutting down gracefully...`);

      server.close(async () => {
        try {
          await require('mongoose').connection.close();
          console.log('✓ MongoDB connection closed');
          console.log('✓ Server closed successfully');
          process.exit(0);
        } catch (err) {
          console.error('Error during graceful shutdown:', err);
          process.exit(1);
        }
      });

      // Force shutdown after 10 seconds
      setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
      }, 10000);
    };

    // Handle shutdown signals
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

    // Handle uncaught exceptions
    process.on('uncaughtException', (err) => {
      console.error('Uncaught Exception:', err);
      gracefulShutdown('uncaughtException');
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
      gracefulShutdown('unhandledRejection');
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Start the server
startServer();