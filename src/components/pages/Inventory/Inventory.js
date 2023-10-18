import React, { useEffect, useState } from "react";
import { Space, Typography, Table, Avatar, Rate } from "antd";
import { Getproducts } from "../Dashboard/Rcords";
const Inventory = () => {
  const [productss, setproductss] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Getproducts().then((pro) => {
      setproductss(pro.products);

      setLoading(false);
    });
  }, []);
  return (
    <Space direction="vertical">
      <Typography.Title>Products Table</Typography.Title>
      <Table
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link}></Avatar>;
            },
          },
          {
            title: "Title",
            dataIndex: "title",
          },

          {
            title: "Price",
            dataIndex: "price",
            render: (val) => {
              return <span>{val}$</span>;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />
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

export default Inventory;
