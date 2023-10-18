import React, { useEffect, useState } from "react";
import { Space, Typography, Table, Avatar } from "antd";
import {  Getusers } from "../Dashboard/Rcords";
const Customers = () => {
  const [productss, setproductss] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Getusers().then((pro) => {
      console.log(pro.users)
      setproductss(pro.users);

      setLoading(false);
    });
  }, []);
  return (
    <Space direction="vertical">
      <Typography.Title>Users</Typography.Title>
      <Table
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render:(url)=>{
              return <Avatar src={url} />
            }
          },
          {
            title: "FirstName",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
          },
          {
            title: "Age",
            dataIndex: "age",
          },
          {
            title: "Gender",
            dataIndex: "gender",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "address",
            dataIndex: "address",
            render: (address) => {
              return <span>{address.address},{address.city}</span>
            },
          },
        ]}
        dataSource={productss}
        loading={Loading}
        pagination={{
          pageSize: 8
        }}
      ></Table>
    </Space>
  );
};

export default Customers;
