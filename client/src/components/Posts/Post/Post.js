import { Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import moment from 'moment';
import React, { useState } from 'react';
import './styles.css';
import { EllipsisOutlined,LikeOutlined,DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, updateActivePost } from '../../../actions/posts';

function Post({post}) {
  const [deleteToggled,setDeleteToggled]=useState(false);
  const likeToggledStyle={color:'#1890FF',fontWeight:600};
  const deleteToggledStyle={color:'rgba(255, 0, 0, 0.5)'};
  const dispatch=useDispatch();
  const handleDeletePost=()=>{
    setDeleteToggled(!deleteToggled);
    dispatch(deletePost(post._id));
  }
  const handleLikeCount=()=>{
    dispatch(likePost(post._id));
  }
  
  return (
    <Card
        style={{ borderRadius:'15px', margin:'5px 0'}}
        cover={
        <div className='overlay-div'>
            <img alt="img" src={post.selectedFile} className='post-img'/>
            <div className="d-flex justify-content-between align-items-top px-4" id='post-overlay'>
                <div>
                    <h2 className='overlay-txt'>{post.title}</h2>
                    <h5 className='overlay-txt'>{moment(post.createdAt).fromNow()}</h5>
                </div>
                <Button shape="circle" icon={<EllipsisOutlined />} onClick={()=>dispatch(updateActivePost(post))}/>
            </div>
        </div>
        }
    >
    <Meta
      description={
        <div>
            {post.tags.map(tag=>'#'+tag+' ')}
            <h1 className='my-4'>{post.message}</h1>
            <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex justify-content-center align-items-center like-btn' onClick={handleLikeCount}><LikeOutlined style={post.likeCount ? likeToggledStyle : {}}/><span className={'ms-1'+(post.likeCount && ' toggled')}>Like {post.likeCount}</span></div>
                <div className='d-flex justify-content-center align-items-center dlt-btn' onClick={handleDeletePost}><DeleteOutlined style={deleteToggled ? deleteToggledStyle : {}} /><span className={'ms-1'+(deleteToggled && ' toggled')}>Delete</span></div>
            </div>
        </div>
      }
    />
  </Card>
  )
}

export default Post