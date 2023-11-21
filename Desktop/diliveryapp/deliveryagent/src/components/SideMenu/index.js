import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();

  return (
    <div className="SizeMenu">
      <Menu
        onClick={(item) => {
          // item.key
          navigate(item.key);
        }}
        // selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Login",
            icon: <UserOutlined />,
            key: "/login",
          },
          {
            label: "Signup",
            icon: <UserOutlined />,
            key: "/signup",
          },
          {
            label: "Order Details",
            icon: <ShopOutlined />,
            key: "/order", // You can replace "1" with the specific order ID
          },
          {
            label: "Single Order",
            icon: <ShoppingCartOutlined />,
            key: "/singleorder",
          },
          {
            label: "Profile",
            icon: <UserOutlined />,
            key: "/Profilepage",
          },

          {
            label: "Flash Screen",
            icon: <UserOutlined />,
            key: "/flashScreen",
          },
          {
            label: "Delivery Location",
            icon: <UserOutlined />,
            key: "/deliveryLocation",
          },
          {
            label: "Drop Location",
            icon: <UserOutlined />,
            key: "/DropLocation",
          },
          {
            label: "Earning Page",
            icon: <UserOutlined />,
            key: "/EarningPage",
          },
          {
            label: "Review/Ratings",
            icon: <UserOutlined />,
            key: "/Review",
          },
          {
            label: "Home",
            icon: <UserOutlined />,
            key: "/Home",
          },


        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;