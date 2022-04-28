import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import './styles.css';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, patchPost, updateActivePost } from '../../actions/posts';

function PostForm() {
  const [form] = Form.useForm();
  const dispatch=useDispatch();
  const [postData,setPostData]=useState({title:'',message:'',tags:'',creator:'',selectedFile:''});
  const post=useSelector(state=>state.activePost);
  console.log('dflkjaslk',post)
  const onFinish = (values) => {
    if(post._id){
      dispatch(patchPost({_id:post._id,data:postData}));
      setPostData({});
      dispatch(updateActivePost({}));
    }
    else dispatch(createPost(postData));
  }; 
  useEffect(() => {
    if(post._id){
      setPostData({title:post.title,message:post.message,tags:post.tags[0],creator:post.creator,selectedFile:post.selectedFile});
    }
  }, [post._id,post]);
  
  const onReset = () => {
    form.resetFields();
    if(post._id)
      dispatch(updateActivePost({}));
    setPostData({});
  };
  return (
    <div className='bg-shadow py-3 px-4'>
      <h4 className='text-center'>{post._id ? 'Editing a memory' : 'Creating a memory'}</h4>
      <Form
        layout='vertical'
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name='creator'>
          {console.log(postData.creator)}
          <Input placeholder="Creator" value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
        </Form.Item>
        <Form.Item name='title'>
          {console.log(postData.title)}
          <Input placeholder="Title" value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})} />
        </Form.Item>
        <Form.Item name='message'>
          {console.log(postData.message)}
          <Input placeholder="Message" value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})} />
        </Form.Item>
        <Form.Item name='tags'>
          {console.log(postData.tags)}
          <Input placeholder="Tags" value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})} />
        </Form.Item>
        <Form.Item name="upload">
          <FileBase64
            type='file'
            multiple={ false }
            onDone={ ({base64})=> setPostData({...postData,selectedFile:base64})} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className='me-3'>Submit</Button>
          <Button type="secondary" onClick={onReset}>Reset</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default PostForm