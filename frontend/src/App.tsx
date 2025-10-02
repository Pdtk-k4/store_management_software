import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import CreateProduct from "./pages/products/CreateProduct";
import CreateCategory from "./pages/category/CreateCategory";
import ListProduct from "./pages/products/ListProductPage";
import ProductDetails from "./pages/products/ProductDetails";
import "./App.css";

// Ant Design theme configuration

const theme = {
  token: {
    colorPrimary: "#1890ff",
    borderRadius: 6,
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/create" element={<CreateProduct />} />
            <Route path="/products/listproduct" element={<ListProduct />} />
            <Route path="/categories/create" element={<CreateCategory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route
              path="/customers"
              element={<div>Customers Page - Coming Soon</div>}
            />
          </Routes>
        </AppLayout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
