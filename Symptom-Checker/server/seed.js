const mongoose = require('mongoose');
const Symptom = require('./models/Symptom');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Symptom.deleteMany({});
  await Symptom.insertMany([
    { name: "Fever", associatedDiseases: ["Flu", "Malaria"] },
    { name: "Cough", associatedDiseases: ["Flu", "COVID-19"] },
    { name: "Headache", associatedDiseases: ["Migraine", "Flu"] },
    { name: "Fatigue", associatedDiseases: ["Anemia", "Flu", "COVID-19"] }
  ]);
  console.log("Database Seeded ✅");
  process.exit();
});
