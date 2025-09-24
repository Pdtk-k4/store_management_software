import React from 'react';
import { Layout, Menu, theme } from 'antd';
import {
  DashboardOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <DashboardOutlined />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: '/products',
      icon: <ShoppingOutlined />,
      label: <Link to="/products">Sản phẩm</Link>,
    },
    {
      key: '/createProduct',
      icon: <ShoppingOutlined />,
      label: <Link to="/products/create">Thêm sản phẩm</Link>,
    },
    {
      key: '/orders',
      icon: <ShoppingCartOutlined />,
      label: <Link to="/orders">Đơn hàng</Link>,
    },
    {
      key: '/customers',
      icon: <UserOutlined />,
      label: <Link to="/customers">Khách hàng</Link>,
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider
        theme="light"
        width={250}
        className="shadow-md"
      >
        <div className="p-4">
          <h1 className="text-xl font-bold text-center text-blue-600">
            Store Management
          </h1>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          className="border-r-0"
        />
      </Sider>
      <Layout>
        <Header
          style={{ background: colorBgContainer }}
          className="px-4 shadow-sm flex items-center justify-between"
        >
          <div className="text-lg font-semibold">
            Quản lý cửa hàng
          </div>
          <div className="text-sm text-gray-600">
            Chào mừng, Admin
          </div>
        </Header>
        <Content
          className="m-px"
          style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;