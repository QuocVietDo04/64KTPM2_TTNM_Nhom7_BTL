// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Import các trang (pages) ở đây
import HomePage from './pages/HomePage';
import OrderTrackingPage from './pages/OrderTrackingPage';
function App() {
  return (
    <Router> {/* BrowserRouter bao bọc toàn bộ ứng dụng để quản lý định tuyến */}
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/order-tracking" element={<Layout><OrderTrackingPage /></Layout>} />
        {/* Các routes khác */}
      </Routes>
    </Router>
  );
}

export default App;