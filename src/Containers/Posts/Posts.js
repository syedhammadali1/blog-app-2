import Column from 'antd/es/table/Column';
import React, { useEffect, useState } from 'react'
import CustomDataTable from '../../Components/Table/CustomDataTable';
import PostService from '../../services/posts.service'
import { helpers } from '../../util/helpers';
import  noimage from './noimage.webp';

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

 
const getPosts = async () => {
  setLoading(true)
const { ok , data } = await PostService.getPosts();
  if(ok){
    console.log(data?.results);
    setPosts(data?.results);
  }
  setLoading(false)

 }
 
 
  useEffect(() => {
    getPosts()
  }, [])

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Title',
      dataIndex: 'post_title',
    },
    {
      title: 'Status',
      dataIndex: 'post_status',
      key: 'post_status',
    },
    {
      title: 'Author',
      dataIndex: 'post_author',
      key: 'post_author',
    },
    {
      title: 'Content',
      dataIndex: 'post_content',
      key: 'post_content',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (img) => img ? <img src={img} alt={'noimage'} height="50" width='50' /> : <img src={noimage} height="50" width='50' />,
    },
    {
      title: 'Date',
      dataIndex: 'post_date',
      render: (data) => {
        // console.log(helpers.convertDateToOurFormat(data));
      return  data ? helpers.convertDateToOurFormat(data) : 'no date'
      } 
    },
    // {
    //   title: 'Edit',
    //   key: "edit",
    //   render: (text,record,index) => {
    //     // console.log(text.user_id);
    //     return (
    //       <>
    //       <CustomButton type="primary" icon={<EditOutlined />} onClick={editBtnHandler(text.user_id)} ghost  >Edit</CustomButton>
  
    //    </>
  
    //     )
    //   },
    // },
  
   
  ];
  
  return (
   <CustomDataTable columns={columns} dataSource={posts} loading={loading}></CustomDataTable>
  )
}
