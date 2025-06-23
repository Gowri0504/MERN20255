const mongoose = require('mongoose');

const symptomSchema = new mongoose.Schema({
  name: String,
  description: String,
  severity: String
});

module.exports = mongoose.model('Symptom', symptomSchema);
