import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
const app = express();
app.use(express.json())
dotenv.config();
const PORT = process.env.PORT || 8001
const URI = process.env.MONGO
mongoose.connect(URI).then(()=>{
    console.log("Database connected successfully.")
}).catch((err)=>{
    console.log("connection failed:",{err})
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

app.listen(PORT,()=>{
    console.log("Server is running on PORT:",{PORT})
})