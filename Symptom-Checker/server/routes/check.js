const express = require('express');
const router = express.Router();
const Symptom = require('../models/Symptom');

// Check probable diseases
router.post('/', async (req, res) => {
  const { symptoms } = req.body;
  const matched = await Symptom.find({ name: { $in: symptoms } });

  let diseaseMap = {};
  matched.forEach(s => {
    s.associatedDiseases.forEach(disease => {
      diseaseMap[disease] = (diseaseMap[disease] || 0) + 1;
    });
  });

  const sorted = Object.entries(diseaseMap).sort((a, b) => b[1] - a[1]);
  res.json({ probableDiseases: sorted.map(([name, score]) => ({ name, score })) });
});

module.exports = router;
