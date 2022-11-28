import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { userServices } from '../../services/users.service';
import { AuthenticatedRoutesConstant, userInfo } from '../../util/constant';
const Register = () => {
  const [loading, setLoading] = useState(false)    
  const onFinish = async (values) => {
    setLoading(true)
    const payload = {
      username: values.userName,
      user_firstname: values.firstName,
      user_lastname: values.lastName,
      email: values.email,
      password: values.password,
      c_password: values.password,
    };
   const {ok,data} = await userServices.Register(payload);
    if(ok){
      localStorage.setItem(userInfo.TOKEN,data?.results?.token)
      localStorage.setItem(userInfo.USERNAME,data?.results?.username)
      window.location.href = AuthenticatedRoutesConstant.User;
    }
    setLoading(false)
    
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="firstName"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your firstName!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="lastName"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your lastName!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="userName"
        rules={[
          {
            required: true,
            message: 'Please input your userName!',
          },
        ]}
      >
        <Input />
      </Form.Item>
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
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;