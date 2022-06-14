import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

const SignInForm = () => {
  return (
    <>
    <Form name="basic" layout="vertical" autoComplete="off">
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

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
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
