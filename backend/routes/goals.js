const express = require('express');
const router = express.Router();
const { db } = require('../firebaseConfig'); // ✅ use your Firebase config

// GET all goals
router.get('/', async (req, res) => {
  try {
    const snapshot = await db.collection('goals').get();
    const goals = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new goal
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newGoalRef = await db.collection('goals').add({
      ...data,
      current: 0,
      createdAt: new Date()
    });
    const newGoal = await newGoalRef.get();
    res.status(201).json({ id: newGoal.id, ...newGoal.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
