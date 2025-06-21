const express = require('express');
const cors = require('cors');
const transactionsRoutes = require('./routes/transactions'); // adjust path if needed

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/transactions', transactionsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('FinWise backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
