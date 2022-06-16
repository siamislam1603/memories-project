import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title:String,
    message:String,
    tags:[String],
    creator:String,
    selectedFile:String,
    likes:{
        type:[String],
        default:[]
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const postMessage=mongoose.model('postMessage',postSchema);
export default postMessage;