import { Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import PostForm from '../PostForm/PostForm';
import Posts from '../Posts/Posts';

const Home = () => {
  const dispatch=useDispatch();
  const posts=useSelector(state=>state.posts);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  useEffect(()=>{
    if(posts.length && isLoading) setIsLoading(false);
  },[posts.length,isLoading]);
  return (
    <div className="row my-4">
        <div className="col-xs-12 col-sm-8">
        {isLoading ? <div className='d-flex justify-content-center'><Spin size="large" /></div> : <Posts></Posts>}
        </div>
        <div className="col-xs-12 col-sm-4">
        <PostForm></PostForm>
        </div>
    </div>
  )
}

export default Home