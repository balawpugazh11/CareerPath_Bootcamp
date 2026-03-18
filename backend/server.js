// Placeholder backend server file
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend Placeholder');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
