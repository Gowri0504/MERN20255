const mongoose = require('mongoose');   

const connectDB =  () => { 
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB connected successfully');
    } catch{
        console.log(err);
    }
}
module.exports = connectDB;
