const express  = require('express')
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 8001
const URI = process.env.MONGO
mongoose.connect(URI).then(()=>{
    console.log("Database connected successfully.")
}).catch((err)=>{
    console.log("connection failed:",{err})
})
app.listen(PORT,()=>{
    console.log("Server is running on PORT:",{PORT})
})