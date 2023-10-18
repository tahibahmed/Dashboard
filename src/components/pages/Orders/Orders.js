import React, { useEffect, useState } from "react";
import { Space, Typography, Table } from "antd";
import { Getorders } from "../Dashboard/Rcords";
const Orders = () => {
  const [productss, setproductss] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Getorders().then((pro) => {
      console.log(pro.products);
      setproductss(pro.products);
      setLoading(false);
    });
  }, []);
  return (
    <Space direction="vertical">
      <Typography.Title>Orders Table</Typography.Title>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (val) => {
              return <span>{val}$</span>;
            },
          },
          {
            title: "dis - Price",
            dataIndex: "discountedPrice",
            render: (val) => {
              return <span>{val}$</span>;
            },
          },
        
          {
            title: "total",
            dataIndex: "total",
          }
        ]}
        dataSource={productss}
        loading={Loading}
        pagination={{
      pageSize: 10
        }}
       
      ></Table>
    </Space>
  );
};

export default Orders;
