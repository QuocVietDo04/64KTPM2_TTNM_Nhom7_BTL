// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Import các trang (pages) ở đây
import HomePage from './pages/HomePage';
import OrderHistory from './pages/OrderHistory';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Router> {/* BrowserRouter bao bọc toàn bộ ứng dụng để quản lý định tuyến */}
      <Layout> {/* Component Layout bao bọc Routes để áp dụng cấu trúc chung */}
        <Routes> {/* Routes định nghĩa các tuyến đường khác nhau */}
          {/* Định nghĩa các Route cho từng trang */}
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardPage />} /> */}

          {/* Bạn có thể thêm một Route catch-all cho trang 404 */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;