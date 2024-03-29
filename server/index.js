import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { CONNECTION_URL } from './connection_url.js';
import router from './routes/posts.js';
import userRoutes from './routes/users.js';

const app=express();

app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Welcome to the clone memories app');
});
app.use('/posts',router);
app.use('/user',userRoutes);

const PORT=process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
    .catch((err)=>console.log(err.message));