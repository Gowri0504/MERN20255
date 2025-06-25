const todo = require('../models/todoModels');

exports.getTodo = async (req,res)=>{
    const response = await todo.find();
    res.status(201).json({data: response});
    res.send('Get route working');
}

exports.getTodoById = async(req,res) =>{
    const TaskData = await todo.findById(req.params.id);
    res.status(201).json({TaskData});
}

exports.postTodo = async (req,res)=>{
    const {task, status} = req.body;
    const exist = await todo.findOne({task});
    if(exist){
        return res.status(401).json({
            message:"Task already exist"
        })
    }else{
        const newTask = new todo({task,status});
        await newTask.save();
        res.status(201).json({todo:newTask});
    }
}

exports.putTodo = async(req,res)=>{
    const {task, status} = req.body;
    const update = await todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!update){
        return res.status(401).json({message:"Task not exist"});
    }else{
        res.status(201).json({update});
    }
}

exports.deleteTodo = async(req,res)=>{
    const deleteTask = await todo.findByIdAndDelete(req.params.id);
    if(!deleteTask){
        return res.status(401).json({message:"Task not exist"});
    }else{
        res.status(201).json({deleteTask});
    }
}