import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './styles.css';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

function PostForm() {
  const [form] = Form.useForm();
  const dispatch=useDispatch();
  const [postData,setPostData]=useState({title:'',message:'',tags:'',creator:'',selectedFile:''});
  const onFinish = (values) => {
    dispatch(createPost(postData));
  }; 
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className='bg-shadow py-3 px-4'>
      <h4 className='text-center'>Creating a memory</h4>
      <Form
        layout='vertical'
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name='creator'>
          <Input placeholder="Creator" value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
        </Form.Item>
        <Form.Item name='title'>
          <Input placeholder="Title" value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})} />
        </Form.Item>
        <Form.Item name='message'>
          <Input placeholder="Message" value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})} />
        </Form.Item>
        <Form.Item name='tags'>
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