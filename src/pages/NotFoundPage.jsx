import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); 
  };

  return (
    <div className="bg-[#f5f7fa] w-full py-2">
      <div className="max-w-8xl mx-auto bg-gray-200 p-6 rounded-xl min-h-[500px]">
        <h2 className="text-base font-semibold mb-6">Danh sách sản phẩm</h2>

        <div className="flex flex-col items-center justify-center text-center py-20 space-y-3">
          <img
            src="/src/assets/images/notfound.svg"
            alt="Không tìm thấy"
            className="w-90 h-90"
          />
          <p className="text-base font-medium text-gray-800">
            Ôi! Không tìm thấy sản phẩm nào phù hợp
          </p>
          <p className="text-base text-gray-500">Hãy quay lại trang chủ</p>
          <button
            onClick={handleBackToHome}
            className="mt-2 px-5 py-1.5 text-base rounded-full bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
