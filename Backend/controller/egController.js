// const user = require('../models/userModel')

// exports.getRoute= async (req,res)=>{
//     const response = await user.find();
//     res.status(201).json({data: response});
//     res.send('Get route working');
// }

// exports.getRoute= async (req,res)=>{
//     const userData = await user.find();
//     res.status(201).json({data: userData});
// }

// exports.postRoute = async (req,res)=>{
//     const {username, password} = req.body;
//     const exist = await user.findOne({username});
//     if(exist){
//         return res.status(401).json({
//             message:"User already exist"
//         })
//     }else{
//         const newUser = new user({username,password});
//         await newUser.save();
//         res.status(201).json({user:newUser});
//     }
// }

// exports.putRoute = async(req,res)=>{
//     const {username, password} = req.body;
//     const update = await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
//     if(!update){
//         return res.status(401).json({message:"User not exit"});
//     }else{
//         res.status(201).json({update});
//     }
// }

// exports.deleteRoute = async(req,res)=>{
//     const deleteuser = await user.findByIdAndDelete(req.params.id);
//     if(!deleteuser){
//         return res.status(401).json({message:"User not exit"});
//     }else{
//         res.status(201).json({deleteuser});
//     }
// }


const user = require('../models/userModels');
const bcrypt = require('bcrypt');

exports.getRoute = async (req,res) => {
    const response = await user.find();
    res.status(201).json({data:response})
}



exports.getRouteById = async (req,res)=>{
    const userData = await user.findById(req.params.id);
    res.status(201).json({userData})
}

exports.signupRoute = async (req,res) => {
    const {username,password} = req.body;
    const exist = await user.findOne({username});
    if(exist) return res.status(401).json({
        message:'User already exists'
    })
    const hashedPassword= await bcrypt.hash(password,10)
    const newUser = new user({username,password:hashedPassword})
    await newUser.save();//saves data in mongodb
    res.status(201).json({user:newUser})
}

exports.loginRoute = async (req,res) => {   
    const {username,password} = req.body;
    const exist = await user.findOne({username});
    if(!exist) return res.status(401).json({
        message:'User not exists'
    })
    const isMatch = await bcrypt.compare(password,exist.password);
    if(isMatch) return res.status(201).json({message:'Login successful',user:exist})
    if(!isMatch) return res.status(401).json({
        message:'Invalid credentials'
    })
    res.status(201).json({user:exist})
}

exports.putRoute = async (req,res) => {
    const {username,password} = req.body;
    const update = await user.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!update) return res.status(401).json({message:"User not exists"})
        res.status(201).json({update}) 
}
exports.deleteRoute = async (req,res) => {
    const deleteuser = await user.findByIdAndDelete(req.params.id)
    if(!deleteuser) return res.status(401).json({message:"User not exists"})
        res.status(201).json({deleteuser}) 
}