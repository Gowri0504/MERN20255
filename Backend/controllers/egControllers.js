const user =require('../models/userModel');

exports.getRoute=async (req,res)=>{
    const userData =await user.find();
    res.status(201).json({data: userData});
}
exports.postRoute=async (req,res)=>{
    const {username,password} = req.body;
    const exist = await user.findOne({user: username});
    if(exist) return res.status(401).json({message: 'User already exists'});

    await exist.save();
    res.status(201).json({message: 'User created successfully'});
}
exports.putRoute=async (req,res)=>{
    const {username,password} = req.body;
    const exist = await user.findOne({user: username});
    if(!exist) return res.status(401).json({message: 'User not found'});
    exist.password = password;
    await exist.save();
    res.status(200).json({message: 'User updated successfully'});
}
exports.deleteRoute=async (req,res)=>{
    const {username} = req.body;
    const exist = await user.findOne({user: username});
    if(!exist) return res.status(401).json({message: 'User not found'});
    await user.deleteOne({user: username});
    res.status(200).json({message: 'User deleted successfully'});
}