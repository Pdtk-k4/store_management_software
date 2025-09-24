import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface Order {
  key: string;
  id: string;
  customer: string;
  products: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  date: string;
}

const Orders: React.FC = () => {
  // Sample data
  const orders: Order[] = [
    {
      key: '1',
      id: 'ORD001',
      customer: 'Nguyễn Văn A',
      products: 3,
      total: 1500000,
      status: 'delivered',
      date: '2024-01-15',
    },
    {
      key: '2',
      id: 'ORD002',
      customer: 'Trần Thị B',
      products: 1,
      total: 28000000,
      status: 'shipped',
      date: '2024-01-16',
    },
    {
      key: '3',
      id: 'ORD003',
      customer: 'Lê Văn C',
      products: 2,
      total: 598000,
      status: 'processing',
      date: '2024-01-17',
    },
    {
      key: '4',
      id: 'ORD004',
      customer: 'Phạm Thị D',
      products: 1,
      total: 25000000,
      status: 'pending',
      date: '2024-01-18',
    },
    {
      key: '5',
      id: 'ORD005',
      customer: 'Hoàng Văn E',
      products: 4,
      total: 2400000,
      status: 'cancelled',
      date: '2024-01-19',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'orange';
      case 'processing': return 'blue';
      case 'shipped': return 'purple';
      case 'delivered': return 'green';
      case 'cancelled': return 'red';
      default: return 'default';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Chờ xử lý';
      case 'processing': return 'Đang xử lý';
      case 'shipped': return 'Đã gửi';
      case 'delivered': return 'Đã giao';
      case 'cancelled': return 'Đã hủy';
      default: return status;
    }
  };

  const columns: ColumnsType<Order> = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'id',
      key: 'id',
      width: 120,
    },
    {
      title: 'Khách hàng',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Số sản phẩm',
      dataIndex: 'products',
      key: 'products',
      width: 120,
      align: 'center',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'total',
      key: 'total',
      render: (total: number) => `${total.toLocaleString()} VNĐ`,
      sorter: (a: Order, b: Order) => a.total - b.total,
      width: 150,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>
          {getStatusText(status)}
        </Tag>
      ),
      filters: [
        { text: 'Chờ xử lý', value: 'pending' },
        { text: 'Đang xử lý', value: 'processing' },
        { text: 'Đã gửi', value: 'shipped' },
        { text: 'Đã giao', value: 'delivered' },
        { text: 'Đã hủy', value: 'cancelled' },
      ],
      onFilter: (value: any, record: Order) => record.status === value,
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'date',
      key: 'date',
      width: 120,
      sorter: (a: Order, b: Order) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    },
    {
      title: 'Thao tác',
      key: 'action',
      width: 120,
      render: (_, record: Order) => (
        <Space size="small">
          <Button
            type="primary"
            size="small"
            icon={<EyeOutlined />}
            onClick={() => console.log('View order:', record.id)}
          />
          <Button
            size="small"
            icon={<EditOutlined />}
            onClick={() => console.log('Edit order:', record.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý đơn hàng</h1>
        <div className="flex space-x-2">
          <Tag color="orange">Chờ xử lý: {orders.filter(o => o.status === 'pending').length}</Tag>
          <Tag color="blue">Đang xử lý: {orders.filter(o => o.status === 'processing').length}</Tag>
          <Tag color="purple">Đã gửi: {orders.filter(o => o.status === 'shipped').length}</Tag>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={orders}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total: number, range: [number, number]) => 
            `${range[0]}-${range[1]} của ${total} đơn hàng`,
        }}
        className="bg-white rounded-lg shadow-sm"
      />
    </div>
  );
};

export default Orders;