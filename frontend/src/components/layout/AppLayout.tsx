import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import {
  DashboardOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
    <div className="bg-gray-50 font-sans">
      {/* Sidebar */}
      <div
        id="sidebar"
        className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform lg:translate-x-0 transition-transform duration-300 z-50 lg:z-auto -translate-x-full"
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
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-3 lg:px-6">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <button
                id="menu-toggle"
                className="lg:hidden text-gray-600 hover:text-gray-800"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>

              {/* Search Bar */}
              <div className="relative hidden sm:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="pl-10 pr-4 py-2 w-64 lg:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Mobile Search */}
              <button className="sm:hidden text-gray-600 hover:text-gray-800">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

              {/* Notifications */}
              <div className="relative">
                <button
                  className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors border-0 bg-white "
                >
                  <i className="fa-solid fa-bell text-lg"></i>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>

              {/* Messages */}
              <div className="relative hidden md:block">
                <button
                  className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors border-0 bg-white"
                >
                  <i className="fa-solid fa-envelope text-lg"></i>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                    5
                  </span>
                </button>
              </div>

              {/* User Profile */}
              <div className="relative">
                <button
                  className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors border-0 bg-white"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-medium text-bold">Nguyễn Văn A</div>
                    <div className="text-xs text-gray-500">Admin</div>
                  </div>
                  <i className="fas fa-chevron-down text-gray-400 text-sm"></i>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline"
                      >
                        <i className="fas fa-user w-4"></i>
                        <span>Hồ sơ cá nhân</span>
                      </Link>

                      <Link
                        to="/settings"
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline"
                      >
                        <i className="fas fa-cog w-4"></i>
                        <span>Cài đặt</span>
                      </Link>

                      <hr className="my-2" />

                      <Link
                        to="/logout"
                        className="flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 no-underline"
                      >
                        <i className="fas fa-sign-out-alt w-4"></i>
                        <span>Đăng xuất</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
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
      </div>
    </div>
  );
};

export default AppLayout;
