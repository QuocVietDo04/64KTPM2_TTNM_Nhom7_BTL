import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <Icon icon="mdi:alert-circle-outline" className="text-red-500 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Không tìm thấy kết quả</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Từ khóa bạn nhập không phù hợp với bất kỳ sản phẩm nào trong hệ thống.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition"
      >
        Quay về Trang chủ
      </button>
    </div>
  );
};

export default NotFoundPage;

