require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const bootcampRoutes = require('./routes/bootcampRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(helmet());
app.use(express.json({ limit: process.env.MAX_REQUEST_SIZE || '10mb' }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(logger);
app.use('/test-ui', express.static(path.join(__dirname, 'utils')));

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend running with MongoDB',
    environment: NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/bootcamps', bootcampRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl,
    method: req.method,
    availableRoutes: [
      'GET /',
      'GET /api/bootcamps',
      'POST /api/bootcamps',
      'GET /api/bootcamps/:id',
      'PUT /api/bootcamps/:id',
      'DELETE /api/bootcamps/:id',
    ],
  });
});

app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB();

    const server = app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT} (${NODE_ENV})`);
    });

    const gracefulShutdown = async (signal) => {
      console.log(`${signal} received. Shutting down gracefully...`);

      server.close(async () => {
        try {
          await require('mongoose').connection.close();
          console.log('MongoDB connection closed');
          console.log('Server closed successfully');
          process.exit(0);
        } catch (err) {
          console.error('Error during graceful shutdown:', err);
          process.exit(1);
        }
      });

      setTimeout(() => {
        console.error('Forced shutdown after timeout');
        process.exit(1);
      }, 10000);
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
    process.on('uncaughtException', (err) => {
      console.error('Uncaught Exception:', err);
      gracefulShutdown('uncaughtException');
    });
    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
      gracefulShutdown('unhandledRejection');
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
