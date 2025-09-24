# Store Management Frontend

Ứng dụng quản lý cửa hàng được xây dựng với React, TypeScript, Vite, Tailwind CSS và Ant Design.

## Công nghệ sử dụng

- **React 18** - Library xây dựng giao diện người dùng
- **TypeScript** - Ngôn ngữ lập trình có type safety
- **Vite** - Build tool nhanh cho frontend
- **Tailwind CSS** - Utility-first CSS framework
- **Ant Design** - Component library cho React
- **React Router** - Thư viện routing
- **Axios** - HTTP client

## Cấu trúc thư mục

```
src/
├── components/          # Các component tái sử dụng
│   ├── common/         # Component chung
│   └── layout/         # Component layout
├── pages/              # Các trang chính
│   ├── dashboard/      # Trang dashboard
│   ├── products/       # Quản lý sản phẩm
│   └── orders/         # Quản lý đơn hàng
├── services/           # API services
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── constants/          # Hằng số
└── assets/            # Static assets
```

## Cài đặt và chạy dự án

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại http://localhost:5173

### 3. Build cho production

```bash
npm run build
```

### 4. Preview build

```bash
npm run preview
```

## Tính năng chính

### 1. Dashboard

- Thống kê tổng quan
- Biểu đồ doanh thu
- Đơn hàng gần đây

### 2. Quản lý sản phẩm

- Danh sách sản phẩm với phân trang
- Thêm/sửa/xóa sản phẩm
- Tìm kiếm và lọc sản phẩm
- Quản lý tồn kho

### 3. Quản lý đơn hàng

- Danh sách đơn hàng
- Cập nhật trạng thái đơn hàng
- Lọc theo trạng thái
- Chi tiết đơn hàng

## Cấu hình

### Tailwind CSS

File cấu hình: `tailwind.config.js`

- Đã tắt preflight để tránh xung đột với Ant Design
- Thêm custom colors và utilities

### Ant Design

Theme được cấu hình trong `src/App.tsx`

- Primary color: #1890ff
- Border radius: 6px

## Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build cho production
- `npm run preview` - Preview build
- `npm run lint` - Chạy ESLint

## License

MIT License
