import { Button, Form, Input } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../../actions/posts';

const SignUpForm = () => {
  const dispatch=useDispatch();
  const onFinish = (values) => {
    const {name,...rest}=values;
    dispatch(authenticate({...rest,...name,isLogin:false}));
  };
  const auth=useSelector(state=>state.auth);
  return (
    <>
    <Form name="basic" layout="vertical" autoComplete="off" onFinish={onFinish}>
      <Form.Item label="User Name">
        <Input.Group compact>
          <Form.Item
            name={['name', 'firstName']}
            noStyle
            rules={[{ required: true, message: 'First name is required' }]}
          >
            <Input style={{ width: '50%',marginRight:'10px' }} placeholder="First name" />
          </Form.Item>
          <Form.Item
            name={['name', 'lastName']}
            noStyle
            rules={[{ required: true, message: 'Last name is required' }]}
          >
            <Input style={{ width: '45%' }} placeholder="Last name" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          {
            type: 'email',
            required: auth?.email ?? true,
            message: "Email Address",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: auth?.password ?? true,
            message: "Enter password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Repeat Password"
        name="confirmPassword"
        rules={[
          {
            required: auth?.password ?? true,
            message: "Repeat password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default SignUpForm