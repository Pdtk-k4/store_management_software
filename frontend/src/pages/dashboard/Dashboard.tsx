import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Dashboard Tổng quan</h1>
        <p className="text-gray-600">Chào mừng trở lại! Đây là tổng quan hoạt động hệ thống.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-solid border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Tổng Đơn hàng</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">1,234</p>
              <p className="text-green-600 text-sm mt-1">
                <i className="fas fa-arrow-up"></i> +12% so với tháng trước
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-shopping-cart text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-solid border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Doanh thu</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">₫45.2M</p>
              <p className="text-green-600 text-sm mt-1">
                <i className="fas fa-arrow-up"></i> +8.5% so với tháng trước
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-dollar-sign text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-solid border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Sản phẩm</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">567</p>
              <p className="text-blue-600 text-sm mt-1">
                <i className="fas fa-arrow-up"></i> +23 sản phẩm mới
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-box text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-solid border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Nhân viên</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">48</p>
              <p className="text-gray-600 text-sm mt-1">
                <i className="fas fa-users"></i> 45 đang hoạt động
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-users text-orange-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-solid border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Doanh thu theo tháng</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
          <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <i className="fas fa-chart-line text-4xl mb-2"></i>
              <p>Biểu đồ doanh thu</p>
            </div>
          </div>
        </div>

        {/* Orders Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-solid border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Đơn hàng theo kênh</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
              <option>Tuần này</option>
              <option>Tháng này</option>
            </select>
          </div>
          <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <i className="fas fa-chart-pie text-4xl mb-2"></i>
              <p>Biểu đồ đơn hàng</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-solid border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Đơn hàng gần đây</h3>
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">Xem tất cả</a>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mã đơn</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Khách hàng</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kênh</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng tiền</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-001</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Trần Thị B</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Online
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₫1,250,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Hoàn thành
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-002</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Lê Văn C</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      Tại quầy
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₫850,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Đang xử lý
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-003</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Phạm Thị D</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Online
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₫2,100,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Đang giao
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/*  Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Thao tác nhanh</h3>
          </div>
          <div className="p-6 space-y-4">
            <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border-0">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-plus text-white"></i>
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-800">Tạo đơn hàng mới</div>
                <div className="text-sm text-gray-600">Thêm đơn hàng tại quầy</div>
              </div>
            </button>

            <button className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border-0">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-box text-white"></i>
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-800">Thêm sản phẩm</div>
                <div className="text-sm text-gray-600">Nhập sản phẩm mới</div>
              </div>
            </button>

            <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border-0">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-user-plus text-white"></i>
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-800">Thêm nhân viên</div>
                <div className="text-sm text-gray-600">Tuyển dụng mới</div>
              </div>
            </button>

            <button className="w-full flex items-center space-x-3 p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors  border-0">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-bar text-white"></i>
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-800">Xem báo cáo</div>
                <div className="text-sm text-gray-600">Phân tích dữ liệu</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Dashboard;