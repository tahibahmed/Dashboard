import React, { useEffect, useState } from "react";
import "../App.css";
import { AiTwotoneCustomerService } from "react-icons/ai";

import {
  UploadOutlined,
} from "@ant-design/icons";
import { MdDashboard,MdInventory } from "react-icons/md"
import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  
  const location = useLocation()
  const [selectedkey, setselectedkey]=useState('/')
 useEffect(()=>{
const pathName = location.pathname

setselectedkey(pathName)

 },[location.pathname])
 const navigate = useNavigate();
  return (
    <div className="sidebar">
      <Sider>
        <Menu
        mode="vertical"
        theme="dark"
        style={{fontSize:"20px" }}
          onClick={(items) => {
            navigate(items.key);
          }}
          selectedKeys={[selectedkey]}
          items={[
            {
              key: "/Dashboard",
              icon: < MdDashboard />,
             
              label: "Dashboard",
            },
            {
              key: "/inventory",
              icon: <MdInventory/>,
              label: "Inventory",
            },
            {
              key: "/order",
              icon: <UploadOutlined />,
              label: "Orders",
            },
            {
              key: "/customer",
              icon: <AiTwotoneCustomerService />,
              label: "Customers",
            },
          ]}
        ></Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
