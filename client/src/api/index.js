import axios from 'axios';

const url='https://clone-memories.herokuapp.com/posts';

export const fetchPosts=()=>axios.get(url);
export const createPost=(newPost)=>axios.post(url+'/',newPost);
export const patchPost=(newPost)=>axios.patch(url+`/${newPost._id}`,newPost.data);
export const deletePost=(id)=>axios.delete(url+`/${id}`);
export const likePost=(id)=>axios.patch(url+`/${id}/likePost`);