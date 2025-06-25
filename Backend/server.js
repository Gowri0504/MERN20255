const express=require('express')
const dotenv =require('dotenv')

const connectDB = require('./config/db')//for the connection
const cors=require('cors') //for the cross origin resource sharing
const router = require('./routes/egRouters')
const todorouter=require('./routes/todoRouters.js')

dotenv.config()
const app=express()

const PORT = process.env.PORT;
app.use(express.json());

app.use(cors());
app.use(router);
app.use('/todo',todorouter);
connectDB();

app.listen(PORT,()=>{
    console.log(`server running on port 'http://localhost:${PORT}`)
})