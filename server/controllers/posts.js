import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";

export const getPosts=async (req,res)=>{
    try {
        const posts=await postMessage.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createPost=async (req,res)=>{
    const post=req.body;
    const newPost=new postMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const updatePost=async (req,res)=>{
    const {id}=req.params;
    const post=req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    const updatedPost=await postMessage.findByIdAndUpdate(id,post,{new:true});
    res.json(updatedPost);
}

export const deletePost=async (req,res)=>{
    const {id}=req.params;
    console.log('requested delete post:',id);
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await postMessage.findByIdAndRemove(id);
    res.json({message:'Post removed successfully!'});
}

export const likePost=async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    const post=await postMessage.findById(id);
    const userLiked=post.likes.findIndex((id)=>id===String(req.userId));
    if(userLiked!==-1) post.likes=post.likes.push(String(req.userId));
    else post.likes=post.likes.filter(id=>id!==String(req.userId)); 
    const updatedPost=await postMessage.findByIdAndUpdate(id,post,{new:true});
    res.json(updatedPost);
}