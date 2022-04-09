import { Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import moment from 'moment';
import React, { useState } from 'react';
import './styles.css';
import { EllipsisOutlined,LikeOutlined,DeleteOutlined } from '@ant-design/icons';

function Post({post}) {
  const [likeToggled,setLikeToggled]=useState(false);
  const [deleteToggled,setDeleteToggled]=useState(false);
  const likeToggledStyle={color:'#1890FF',fontWeight:600};
  const deleteToggledStyle={color:'rgba(255, 0, 0, 0.5)'};
  return (
    <Card
        style={{ borderRadius:'15px' }}
        cover={
        <div className='overlay-div'>
            <img alt="img" src={post.selectedFile} className='post-img'/>
            <div className="d-flex justify-content-between align-items-top px-4" id='post-overlay'>
                <div>
                    <h2 className='overlay-txt'>{post.title}</h2>
                    <h5 className='overlay-txt'>{moment(post.createdAt).fromNow()}</h5>
                </div>
                <Button shape="circle" icon={<EllipsisOutlined />} />
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
                <div className='d-flex justify-content-center align-items-center like-btn' onClick={()=>setLikeToggled(!likeToggled)}><LikeOutlined style={likeToggled ? likeToggledStyle : {}}/><span className={'ms-1'+(likeToggled && ' toggled')}>Like {post.likeCount}</span></div>
                <div className='d-flex justify-content-center align-items-center dlt-btn' onClick={()=>setDeleteToggled(!deleteToggled)}><DeleteOutlined style={deleteToggled ? deleteToggledStyle : {}} /><span className={'ms-1'+(deleteToggled && ' toggled')}>Delete</span></div>
            </div>
        </div>
      }
    />
  </Card>
  )
}

export default Post