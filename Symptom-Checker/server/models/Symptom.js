const mongoose = require('mongoose');

const SymptomSchema = new mongoose.Schema({
  name: String,
  associatedDiseases: [String]
});

module.exports = mongoose.model('Symptom', SymptomSchema);
