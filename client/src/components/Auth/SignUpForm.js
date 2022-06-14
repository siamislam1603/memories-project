import { Button, Form, Input } from 'antd'
import React from 'react'

const SignUpForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
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
            required: true,
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
            required: true,
            message: "Enter password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Repeat Password"
        name="repeatPassword"
        rules={[
          {
            required: true,
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