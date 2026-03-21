const express = require('express');
const cors = require('cors');
const { bootcamps, dashboardSummary } = require('./data/platformData');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'Path4Career Bootcamp API',
    status: 'ok',
    endpoints: ['/api/health', '/api/bootcamps', '/api/dashboard-summary'],
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    checkedAt: new Date().toISOString(),
  });
});

app.get('/api/bootcamps', (req, res) => {
  res.json({
    count: bootcamps.length,
    items: bootcamps,
  });
});

app.get('/api/dashboard-summary', (req, res) => {
  res.json(dashboardSummary);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
