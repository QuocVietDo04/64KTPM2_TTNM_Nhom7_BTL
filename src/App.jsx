// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Import các trang (pages) ở đây
import HomePage from './pages/HomePage';
import SearchResultPage from './pages/SearchResultPage';
import NotFoundPage from './pages/NotFoundPage'; // ✅ Thêm dòng này
import OrderHistory from './pages/OrderHistory';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import ProfilePage from './pages/ProfilePage';
import ShippingAddressPage from './pages/ShippingAddressPage';

function App() {
  return (
    <Router> {/* BrowserRouter bao bọc toàn bộ ứng dụng để quản lý định tuyến */}
      <Layout> {/* Component Layout bao bọc Routes để áp dụng cấu trúc chung */}
        <Routes> {/* Routes định nghĩa các tuyến đường khác nhau */}
          {/* Định nghĩa các Route cho từng trang */}
          <Route path="/" element={<HomePage />} />
          <Route path="/search-result" element={<SearchResultPage />} />
          <Route path="/not-found" element={<NotFoundPage />} /> {/* ✅ Thêm dòng này */}
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          {/* Route này sẽ tự động nhận state từ navigation và truyền xuống CheckoutPage */}
          <Route path="/order-tracking" element={<OrderTrackingPage />} />
          <Route path="/track-order" element={<OrderTrackingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/shipping-address" element={<ShippingAddressPage />} />
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
