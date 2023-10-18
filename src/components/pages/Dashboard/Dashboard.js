import { Space, Typography, Card, Statistic, Table } from "antd";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import { Getorders, Getproducts, Getrevenue, Getusers, Rcords } from "./Rcords";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Dashboard = () => {
  const [orderss, setorders] = useState(0);
  const [inventory, setinventory] = useState(0);
  const [customers, setcustomer] = useState(0);
  const [revenue, setrevenue] = useState(0);
  const [users, setusers] = useState(0);

  useEffect(() => {
    Getorders().then((res) => {
      setorders(res.total);
      setrevenue(res.discountedTotal)
      Getusers().then((res) => {
        setcustomer(res.total);
      });
      Getproducts().then((res) => {
        setinventory(res.total);
      });
    });
  }, []);
  return (
    <div>
      <Space size={26} direction="vertical">
        <Typography.Title level={2}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashboaardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  fontSize: 24,
                  borderRadius: 20,
                  backgroundColor: "rgba(0,255,0,0.25)",
                  padding: 10,
                }}
              />
            }
            title={"Orders"}
            value={orderss}
          />
          <DashboaardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "green",
                  fontSize: 24,
                  borderRadius: 20,
                  backgroundColor: "rgba(0,255,0,0.25)",
                  padding: 10,
                }}
              />
            }
            title={"Inventory"}
            value={inventory}
          />
          <DashboaardCard
            icon={
              <UserOutlined
                style={{
                  color: "green",
                  fontSize: 24,
                  borderRadius: 20,
                  backgroundColor: "rgba(0,255,255,0.25)",
                  padding: 10,
                }}
              />
            }
            title={"Customer"}
            value={customers}
          />
          <DashboaardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "red",
                  fontSize: 24,
                  borderRadius: 20,
                  backgroundColor: "rgba(255,0,0,0.25)",
                  padding: 10,
                }}
              />
            }
            title={"Revenue"}
            value={revenue}
          />
        </Space>
        <Space>
          <RecentOrders />
          <Chartdashboard />
        </Space>
      </Space>
    </div>
  );
};

const DashboaardCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value}></Statistic>
      </Space>
    </Card>
  );
};

const RecentOrders = () => {
  const [dataa, setData] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Rcords()
      .then((data) => {
        setData(data.products);
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Typography.Title level={2}>RecentOrders</Typography.Title>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
          {
            title: "dis.Percentage",
            dataIndex: "discountPercentage",
          },
        ]}
        dataSource={dataa}
        loading={Loading}
        pagination={false}
      ></Table>
    </>
  );
};
const Chartdashboard = () => {
  const [Chartdata, setChart] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    Getrevenue().then((dataa) => {
      const labels = dataa.carts.map((cart) => {
        return `User-ID${cart.userId}`;
      });
      const data = dataa.carts.map((cart) => {
        return cart.discountedTotal;
      });
      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0,1)",
          },
        ],
      };
      setChart(dataSource);
    });
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 330, marginTop: 80 }}>
      <Bar options={options} data={Chartdata} />;
    </Card>
  );
};

export default Dashboard;
