import * as api from '../api/index';

export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchPosts();
        console.log(data);
        dispatch({type:'FETCH_ALL',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost=(newPost)=>async(dispatch)=>{
    try {
        const {data}=await api.createPost(newPost);
        dispatch({type:'CREATE',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}