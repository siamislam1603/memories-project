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

export const patchPost=(newPost)=>async(dispatch)=>{
    try {
        const {data}=await api.patchPost(newPost);
        dispatch({type:'UPDATE',payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost=(id)=>async(dispatch)=>{
     try {
        const {data}=await api.deletePost(id);
        console.log(data,'delete')
        dispatch({type:'DELETE',payload:id});
     } catch (error) {
         console.log(error);
     }
}

export const likePost=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.likePost(id);
        dispatch({type:'LIKE_UPDATE',payload:data});
    } catch (error) {
        
    }
}

export const updateActivePost=(post)=>async(dispatch)=>{
    dispatch({type:'post-clicked',payload:post});
}