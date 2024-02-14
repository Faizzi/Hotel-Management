import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
const app = express();

dotenv.config();
const PORT = process.env.PORT || 8001
const URI = process.env.MONGO
mongoose.connect(URI).then(()=>{
    console.log("Database connected successfully.")
}).catch((err)=>{
    console.log("connection failed:",{err})
})

app.use('/api/user',userRouter)

app.listen(PORT,()=>{
    console.log("Server is running on PORT:",{PORT})
})