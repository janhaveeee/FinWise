const express = require('express');
const router = express.Router();
const { getDailySaving } = require('../ml_model/huggingface');

router.post('/', async (req, res) => {
  const input = req.body;

  try {
    const prediction = await getDailySaving(input);
    if (prediction === null) {
      return res.json({ recommendedDailySaving: "N/A (AI service busy)" });
    }
    res.json({ recommendedDailySaving: prediction });
  } catch (error) {
    res.status(500).json({ error: 'Prediction failed' });
  }
});

module.exports = router;
