import './App.css';
import Posts from './components/Posts/Posts';
import LogoSVG from './components/SVGs/LogoSVG';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {getPosts} from './actions/posts';
import PostForm from './components/PostForm/PostForm';
import { Spin } from 'antd';

function App() {
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
    <div style={{overflowY:'auto',height:'100vh'}}>
    <div className='container'>
      <div className='logo-bar d-flex align-items-center justify-content-center mt-3'><LogoSVG/></div>
      <div className="row my-4">
        <div className="col-xs-12 col-sm-8">
          {isLoading ? <div className='d-flex justify-content-center'><Spin size="large" /></div> : <Posts></Posts>}
        </div>
        <div className="col-xs-12 col-sm-4">
          <PostForm></PostForm>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;