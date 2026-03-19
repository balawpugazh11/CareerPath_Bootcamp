//console.log("Routes loaded");
const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const bootcampRoutes = require('./routes/bootcampRoutes');


const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(logger);

// Routes
app.use('/api/bootcamps', bootcampRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Backend running 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

