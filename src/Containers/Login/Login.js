import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { userServices } from '../../services/users.service';
import { userInfo } from '../../util/constant';
import "./Login.css";
const Login = () => {
  const onFinish = async (values) => {
    const { ok,data } = await userServices.Login(values)

    if(ok){
      localStorage.setItem(userInfo.TOKEN,data?.results?.token)
      localStorage.setItem(userInfo.USERNAME,data?.results?.username)
    }

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='custom-login-container'>

    <Form
      name="basic"
      className='text-center mx-0 my-auto'
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
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
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    </div>

  );
};
export default Login;