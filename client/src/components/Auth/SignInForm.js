import { Button, Form, Input } from "antd";
import React from "react";

const SignInForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <>
    <Form name="basic" layout="vertical" autoComplete="off" onFinish={onFinish}>
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

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Sign In
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default SignInForm;
