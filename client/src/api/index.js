import axios from 'axios';

// const url='https://clone-memories.herokuapp.com/posts';
const API=axios.create({baseURL:'http://localhost:5000'});

export const fetchPosts=()=>API.get('/posts');
export const createPost=(newPost)=>API.post('/',newPost);
export const patchPost=(newPost)=>API.patch(`/${newPost._id}`,newPost.data);
export const deletePost=(id)=>API.delete(`/${id}`);
export const likePost=(id)=>API.patch(`/${id}/likePost`);

export const signin=(data)=>API.post('/user/signin',data);
export const signup=(data)=>API.post('/user/signup',data);