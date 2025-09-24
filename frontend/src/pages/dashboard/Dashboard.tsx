import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Tổng đơn hàng"
              value={1128}
              prefix={<ShoppingCartOutlined className="text-blue-500" />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Sản phẩm"
              value={93}
              prefix={<ShoppingOutlined className="text-green-500" />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Khách hàng"
              value={1340}
              prefix={<UserOutlined className="text-purple-500" />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Doanh thu"
              value={25678000}
              prefix={<DollarCircleOutlined className="text-orange-500" />}
              suffix="VNĐ"
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card title="Biểu đồ doanh thu" className="h-96">
            <div className="flex items-center justify-center h-full text-gray-500">
              Biểu đồ doanh thu sẽ được hiển thị ở đây
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Đơn hàng gần đây" className="h-96">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">Đơn hàng #{item}001</div>
                    <div className="text-sm text-gray-500">Khách hàng A</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">500,000 VNĐ</div>
                    <div className="text-sm text-gray-500">2 giờ trước</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;