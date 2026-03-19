const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const bootcampRoutes = require('./routes/bootcampRoutes');
const connectDB = require('./config/db');

const app = express();
const PORT = 5000;

// Connect DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(logger);

// Routes
app.use('/api/bootcamps', bootcampRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Backend running with MongoDB 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});