const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const router = require('./routers/egRouter'); // ✅ Import your router

dotenv.config();    

const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());
app.use(router);

// Connect to MongoDB
connectDB();


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
