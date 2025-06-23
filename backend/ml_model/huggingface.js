const axios = require('axios');

async function getDailySaving(input) {
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/huggingface-projects/auto-tabular-regression",
      { inputs: input },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const prediction = response.data[0];

    if (typeof prediction === 'number' && !isNaN(prediction)) {
      return Math.round(prediction);
    } else {
      throw new Error('Invalid prediction format');
    }

  } catch (err) {
    console.warn("Hugging Face unavailable, using fallback logic.");

    // Fallback: simple rule-based saving plan
    const { target, current, daysLeft } = input;
    const remaining = target - current;

    if (daysLeft > 0 && remaining > 0) {
      return Math.ceil(remaining / daysLeft);
    } else {
      return 0; // no savings needed
    }
  }
}

module.exports = { getDailySaving };