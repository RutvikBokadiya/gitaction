// index.js or app.js
const express = require('express');
const app = express();

// Optional: Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Express on port 3000!');
});

// Start server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
