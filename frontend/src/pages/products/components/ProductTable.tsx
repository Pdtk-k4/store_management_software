import React, { useState } from "react";
import { Table, Button, Select, Space, Popconfirm, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

interface Variation {
  id: number;
  name: string;
  code: string;
  stock: number;
  inTrade: number;
  retailPrice: number;
  wholesalePrice: number;
  importPrice: number;
}

interface Product {
  id: number;
  name: string;
  stock: number;
  createdAt: string;
  status?: "active" | "inactive";
  variations?: Variation[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Cát than hoạt tính Aboss",
    stock: 27,
    createdAt: "26/09/2025",
    status: "active",
    variations: [
      {
        id: 101,
        name: "Cát than hoạt tính Aboss hương bạc hà - Túi 18L",
        code: "CTHTA18B",
        stock: 27,
        inTrade: 0,
        retailPrice: 110000,
        wholesalePrice: 95000,
        importPrice: 80000,
      },
      {
        id: 102,
        name: "Cát than hoạt tính Aboss hương bạc hà - Túi 3 túi",
        code: "PVNS240",
        stock: 9,
        inTrade: 9,
        retailPrice: 300000,
        wholesalePrice: 270000,
        importPrice: 250000,
      },
    ],
  },
  {
    id: 2,
    name: "Hạt cho chó S2 V1 topping",
    stock: 3,
    createdAt: "26/09/2025",
    status: "inactive",
  },
  {
    id: 3,
    name: "Xương gặm vị bò",
    stock: 12,
    createdAt: "25/09/2025",
    status: "active",
  },
];

const ProductTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // Cột sản phẩm cha
  const productColumns: ColumnsType<Product> = [
    {
      title: "ảnh",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div>
          <Link
            to={`/products/${record.id}`}
            className="font-medium text-blue-600 hover:underline"
          >
            {text}
          </Link>
          <div className="text-xs text-gray-500">ID: {record.id}</div>
        </div>
      ),
    },
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div>
          <div className="font-medium">{text}</div>
          <div className="text-xs text-gray-500">ID: {record.id}</div>
        </div>
      ),
    },
    {
      title: "Có thể bán",
      dataIndex: "stock",
      key: "stock",
      align: "center",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) =>
        status === "active" ? (
          <Tag color="green">Đang bán</Tag>
        ) : (
          <Tag color="red">Ngừng</Tag>
        ),
    },
    {
      title: "Thao tác",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <Space>
          <Button size="small" type="link">
            Sửa
          </Button>
          <Popconfirm
            title="Bạn có chắc muốn xóa?"
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={() => console.log("Xóa:", record.id)}
          >
            <Button size="small" type="link" danger>
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Cột sản phẩm con (variations)
  const variationColumns: ColumnsType<Variation> = [
    { title: "Phiên bản", dataIndex: "name", key: "name" },
    { title: "Mã SP", dataIndex: "code", key: "code", align: "center" },
    { title: "Có thể bán", dataIndex: "stock", key: "stock", align: "center" },
    {
      title: "Đang giao dịch",
      dataIndex: "inTrade",
      key: "inTrade",
      align: "center",
    },
    {
      title: "Giá bán lẻ",
      dataIndex: "retailPrice",
      key: "retailPrice",
      align: "right",
      render: (val) => `${val.toLocaleString()} đ`,
    },
    {
      title: "Giá bán buôn",
      dataIndex: "wholesalePrice",
      key: "wholesalePrice",
      align: "right",
      render: (val) => `${val.toLocaleString()} đ`,
    },
    {
      title: "Giá nhập",
      dataIndex: "importPrice",
      key: "importPrice",
      align: "right",
      render: (val) => `${val.toLocaleString()} đ`,
    },
  ];

  return (
    <div className="border rounded-md overflow-hidden">
      {/* Bulk action bar */}
      {selectedRowKeys.length > 0 && (
        <div className="p-3 bg-gray-50 border-b flex items-center justify-between">
          <span className="text-sm">
            Đã chọn <b>{selectedRowKeys.length}</b> sản phẩm
          </span>
          <Select
            defaultValue="Chọn thao tác"
            style={{ width: 200 }}
            options={[
              { value: "stock", label: "Kiểm tra tồn kho" },
              { value: "barcode", label: "In mã vạch" },
              { value: "inTrade", label: "Đang giao dịch" },
              { value: "stopTrade", label: "Ngừng giao dịch" },
              { value: "delete", label: "Xóa sản phẩm" },
            ]}
          />
        </div>
      )}

      {/* Table */}
      <Table<Product>
        rowKey="id"
        columns={productColumns}
        dataSource={products}
        rowSelection={{
          selectedRowKeys,
          onChange: (keys) => setSelectedRowKeys(keys),
        }}
        expandable={{
          expandedRowRender: (record) =>
            record.variations ? (
              <Table<Variation>
                rowKey="id"
                columns={variationColumns}
                dataSource={record.variations}
                pagination={false}
                size="small"
              />
            ) : null,
          rowExpandable: (record) =>
            !!record.variations && record.variations.length > 0, // ✅ chỉ hiển thị nút expand nếu có variations
        }}
        pagination={{
          pageSize: 5, // ✅ số sản phẩm mỗi trang
          showSizeChanger: true, // cho phép chọn số dòng/trang
          pageSizeOptions: ["5", "10", "20", "50"], // tùy chọn số dòng
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} của ${total} sản phẩm`, // hiển thị tổng
        }}
      />
    </div>
  );
};

export default ProductTable;
