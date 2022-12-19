
import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import CustomDataTable from '../../Components/Table/CustomDataTable';
import { userServices } from '../../services/users.service';
import { CustomButton } from '../../Components/CustomButton/CustomButton';
import  noimage from './noimage.webp';
import { useNavigate } from 'react-router-dom';
import AuthenticatedRoutes from '../../Components/Routes/AuthenticatedRoutes';
import { AuthenticatedRoutesConstant } from '../../util/constant';





export const Users = () => {


  const columns = [
    {
      title: 'Id',
      dataIndex: 'user_id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'age',
    },
    {
      title: 'Image',
      dataIndex: 'user_image',
      render: (img) => img ? <img src={img} alt={'noimage'} height="50" width='50' /> : <img src={noimage} height="50" width='50' />,
    },
    {
      title: 'Edit',
      key: "edit",
      render: (text,record,index) => {
        // console.log(text.user_id);
        return (
          <>
          <CustomButton type="primary" icon={<EditOutlined />} onClick={editBtnHandler(text.user_id)} ghost  >Edit</CustomButton>
  
       </>
  
        )
      },
    },
  
   
  ];

 const navigate = useNavigate();

  const editBtnHandler = (user_id) => {
    // console.log(AuthenticatedRoutesConstant.EditUser.replace(':id',user_id));
    navigate('/posts');
    // navigate(AuthenticatedRoutes.EditUser.replace(":id", user_id));
  }

  

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState(null)

  const getUsers  = async () => {
    setLoading(true)
    const response = await userServices.getUsers();
    setUsers(response?.data?.results)
    setLoading(false)

    return response;
}

  useEffect(() => {
    function load(){
      getUsers()
    }
    load()
    return () => {
      
    }
  }, [])

  
  return (
<>
<CustomDataTable columns={columns} dataSource={users} loading={loading} />
</>
  )

 };
// export default Users;