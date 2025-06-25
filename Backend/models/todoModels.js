const mongoose = require('mongoose');

const todoData = new mongoose.Schema({
    task:String,
    status:{type:Boolean,default:false}
});

module.exports = mongoose.model('todo',todoData);