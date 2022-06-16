import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const signin=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const existingUser=await userModel.findOne({email});
        if(!existingUser) return res.status(400).json({message:{email:'User does not exist.'}});
        const isPasswordCorrect=await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message:{password:'Invalid Credentials!'}});
        //Here test is gonna be encoded as jwt
        const token=jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:'1h'});
        return res.status(200).json({result:existingUser,token});
    } catch (error) {
        res.status(500).json({message:'Something went wrong.'});
    }
}

export const signup=async(req,res)=>{
    const {firstName,lastName,email,password,confirmPassword}=req.body;
    try {
        const existingUser=await userModel.findOne({email});
        console.log(existingUser,password,confirmPassword);
        if(existingUser) return res.status(400).json({message:{email:'User already exists.'}});
        if(password!==confirmPassword) return res.status(400).json({message:{password:"Password didn't match!"}});
        const hashedPassword=await bcrypt.hash(password,12);
        const result= await userModel.create({email:email,password:hashedPassword,name:`${firstName} ${lastName}`});
        const token=jwt.sign({email:result.email,id:result._id},'test',{expiresIn:'1h'});
        return res.status(200).json({result,token});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}