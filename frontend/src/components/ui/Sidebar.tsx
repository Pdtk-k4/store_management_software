// src/components/ui/Sidebar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

interface MenuItem {
  key: string;
  label: string;
  icon: string;
  path?: string; // dùng cho link
  children?: MenuItem[]; // submenu
}

const menuItems: MenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: "fas fa-tachometer-alt",
    path: "/",
  },
  {
    key: "orders",
    label: "Quản lý Đơn Hàng",
    icon: "fas fa-shopping-cart",
    children: [
      {
        key: "online-orders",
        label: "Đơn Hàng Online",
        icon: "fas fa-globe",
        path: "#",
      },
      {
        key: "store-orders",
        label: "Đơn Hàng Tại Quầy",
        icon: "fas fa-store",
        path: "#",
      },
      {
        key: "edit-orders",
        label: "Sửa/Lý Đơn Hàng",
        icon: "fas fa-edit",
        path: "#",
      },
    ],
  },
  {
    key: "products",
    label: "Quản lý Sản Phẩm",
    icon: "fa-solid fa-box-open",
    children: [
      {
        key: "list-products",
        label: "DS Sản Phẩm",
        icon: "fas fa-list",
        path: "#",
      },
      {
        key: "add-products",
        label: "Thêm Sản Phẩm",
        icon: "fas fa-plus",
        path: "#",
      },
      { key: "categories", label: "Danh Mục", icon: "fas fa-tags", path: "#" },
      {
        key: "warehouse",
        label: "Kho Hàng",
        icon: "fas fa-warehouse",
        path: "#",
      },
    ],
  },
  {
    key: "users",
    label: "Quản lý Nhân Viên",
    icon: "fas fa-users",
    children: [
      {
        key: "list-users",
        label: "DS Nhân Viên",
        icon: "fas fa-user-friends",
        path: "#",
      },
      {
        key: "add-users",
        label: "Thêm Nhân Viên",
        icon: "fas fa-user-plus",
        path: "#",
      },
      {
        key: "attendance",
        label: "Chấm Công",
        icon: "fas fa-clock",
        path: "#",
      },
      {
        key: "salary",
        label: "Lương Thưởng",
        icon: "fas fa-dollar-sign",
        path: "#",
      },
    ],
  },
  {
    key: "tasks",
    label: "Quản lý Công Việc",
    icon: "fas fa-tasks",
    children: [
      {
        key: "projects",
        label: "Dự Án",
        icon: "fas fa-project-diagram",
        path: "#",
      },
      {
        key: "schedule",
        label: "Lịch Làm Việc",
        icon: "fas fa-calendar-alt",
        path: "#",
      },
      {
        key: "missions",
        label: "Nhiệm Vụ",
        icon: "fas fa-check-circle",
        path: "#",
      },
    ],
  },
  {
    key: "reports",
    label: "Báo Cáo",
    icon: "fas fa-chart-bar",
    children: [
      {
        key: "revenue-report",
        label: "Doanh Thu",
        icon: "fas fa-chart-line",
        path: "#",
      },
      {
        key: "top-products-report",
        label: "Sản Phẩm Bán Chạy",
        icon: "fas fa-chart-pie",
        path: "#",
      },
      {
        key: "staff-performance-report",
        label: "Hiệu Suất NV",
        icon: "fas fa-users-cog",
        path: "#",
      },
    ],
  },
  {
    key: "settings",
    label: "Cài Đặt",
    icon: "fas fa-cog",
    children: [
      {
        key: "store-settings",
        label: "Cửa Hàng",
        icon: "fa-solid fa-shop",
        path: "#",
      },
      {
        key: "payment-settings",
        label: "Thanh Toán",
        icon: "fas fa-credit-card",
        path: "#",
      },
      {
        key: "security-settings",
        label: "Bảo Mật",
        icon: "fas fa-shield-alt",
        path: "#",
      },
      {
        key: "notification-settings",
        label: "Thông Báo",
        icon: "fas fa-bell w-4",
        path: "#",
      },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  // State quản lý submenu đang mở
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (key: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key], // toggle true/false
    }));
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        id="mobile-overlay"
        className={`fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 lg:translate-x-0 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Wrapper để chia logo & menu */}
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between px-4 py-5 border-b-2 border-red-500 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold text-gray-800">
                Store Management
              </span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              id="close-sidebar"
              className="lg:hidden text-gray-500 hover:text-gray-700 border-0 bg-white"
            >
              <i className="fas fa-times text-lg text-gray-700"></i>
            </button>
          </div>

          {/* Navigation (scroll riêng) */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto pb-10 custom-scrollbar">
            {menuItems.map((item) =>
              item.children ? (
                <div key={item.key} className="space-y-1">
                  {/* Toggle button */}
                  <button
                    onClick={() => toggleMenu(item.key)}
                    className="flex items-center justify-between w-full p-3 rounded-lg text-gray-800 text-base hover:bg-gray-100 transition-colors border-0 bg-white"
                  >
                    <div className="flex items-center space-x-3">
                      <i className={`${item.icon} w-5`}></i>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <i
                      className={`fas fa-chevron-down transform transition-transform duration-300 ${
                        openMenus[item.key] ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>

                  {/* Submenu */}
                  <div
                    className={`ml-8 space-y-1 overflow-hidden transition-all duration-300 ${
                      openMenus[item.key]
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.key}
                        to={child.path || "#"}
                        className="flex items-center space-x-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors no-underline"
                      >
                        <i className={`${child.icon} w-4`}></i>
                        <span>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.key}
                  to={item.path || "#"}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 text-blue-700 text-base hover:bg-blue-100 transition-colors no-underline"
                >
                  <i className={`${item.icon} w-5`}></i>
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
