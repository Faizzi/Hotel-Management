import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signup = async(req,res,next)=>{
   try {
    const {username,email,password} = req.body
    if(!username || !email || !password){
     res.json({error:"plz fill the fields properly."})
    }

    const existingUser = await User.findOne({email})
    if(existingUser){
     res.json({message:"user already exist"})
    }else{
        const hashedPass =bcrypt.hashSync(password,12)
     const newUser =new User({username,email,password:hashedPass})
     await newUser.save();
     res.json({
        message:"new User created"
     })
     console.log("New User created.",{newUser})
    }
    
   } catch (error) {
      next(error)
   }

}
