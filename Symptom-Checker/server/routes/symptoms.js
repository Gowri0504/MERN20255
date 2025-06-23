// server/routes/symptoms.js
const express = require('express');
const router = express.Router();
const Symptom = require('../models/Symptom');

// Get all symptoms
router.get('/', async (req, res) => {
  try {
    const symptoms = await Symptom.find();
    res.json(symptoms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
