import AppHeader from '../../components/AppHeader/index';
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { Bar } from "react-chartjs-2";

function Dashboard() {
  const orders = 42; // Replace with your data
  const inventory = 12; // Replace with your data
  const customers = 30; // Replace with your data
  const revenue = 12345; // Replace with your data

  return (
    <Space size={20} direction="vertical">
      <AppHeader />
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard icon={<ShoppingCartOutlined />} title="Todays Orders" value={orders} />
        <DashboardCard icon={<ShoppingOutlined />} title="Delivered Order" value={inventory} />
        <DashboardCard icon={<UserOutlined />} title="Pending Order" value={customers} />
        <DashboardCard icon={<DollarCircleOutlined />} title="Revenue" value={revenue} />
      </Space>
      <Space>
        <RecentOrders />
      </Space>
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  const dataSource = []; // Replace with your data

  const columns = [
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
  ];

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </>
  );
}

function DashboardChart() {
  const revenueData = {
    labels: ['January', 'February', 'March', 'April', 'May'], // Sample labels for months
    datasets: [
      {
        label: "Revenue",
        data: [1000, 2000, 1500, 3000, 2500], // Sample revenue data for each month
        backgroundColor: "linear-gradient(270deg, #825CC6 1.55%, #C47ECC 97.04%)",
      },
    ],
  };

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
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={revenueData} />
    </Card>
  );
}

export default Dashboard;
