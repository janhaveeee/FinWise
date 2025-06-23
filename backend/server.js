const express = require('express');
const cors = require('cors');
const transactionsRoutes = require('./routes/transactions');
const goalsRoutes = require('./routes/goals'); 

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
const mlTipRoutes = require("./routes/mlTips");
app.use("/api/ml-tip", mlTipRoutes);

// Routes
app.use('/api/transactions', transactionsRoutes);
app.use('/api/goals', goalsRoutes); // ✅ Add this

// Root route
app.get('/', (req, res) => {
  res.send('FinWise backend is running');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
