const { db } = require('../firebaseConfig');

const addTransaction = async (req, res) => {
  const { type, amount, category, date, description } = req.body;
  const userId = req.user?.uid;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized: No user ID found in token" });
  }

  try {
    const doc = {
      userId,
      type,
      amount,
      category,
      date,
      description,
      createdAt: new Date()
    };

    await db.collection('transactions').add(doc);

    res.status(200).json({ message: 'Transaction added successfully!' });
  } catch (err) {
    console.error("🔥 Error adding transaction:", err);
    res.status(500).json({ message: 'Failed to add transaction', error: err.message });
  }
};

module.exports = { addTransaction };
