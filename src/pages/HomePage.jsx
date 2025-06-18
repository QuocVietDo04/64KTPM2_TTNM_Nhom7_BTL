import React, { useState } from 'react';
import productsData from '../data.js';

const HomePage = () => {
  const [selectedPrice, setSelectedPrice] = useState('');

  return (
    <div className="w-full bg-[#f5f7fa] px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">

        {/* BỘ LỌC NÂNG CAO */}
        <div className="w-full md:w-1/4 bg-white p-4 rounded-2xl shadow">
          <h2 className="text-base font-semibold flex items-center gap-1 mb-4">
            <span className="text-lg">☰</span> Bộ lọc nâng cao
          </h2>

          {/* Đối tượng sử dụng */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Đối tượng sử dụng</h3>
            <div className="flex flex-col gap-2 text-sm">
              {['Tất cả', 'Người cao tuổi', 'Trẻ em', 'Người lớn', 'Phụ nữ có thai'].map((target, i) => (
                <label key={i} className="inline-flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox accent-blue-500 hover:cursor-pointer" />
                  {target}
                </label>
              ))}
            </div>
          </div>

          {/* Xuất xứ */}
          <div className="mb-4 border-t pt-4">
            <h3 className="text-sm font-semibold mb-2">Xuất xứ</h3>
            <div className="flex flex-col gap-2 text-sm">
              {['Việt Nam', 'Thái Lan', 'Ấn Độ', 'Hoa Kỳ', 'Anh'].map((origin, i) => (
                <label key={i} className="inline-flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox accent-blue-500" />
                  {origin}
                </label>
              ))}
            </div>
          </div>

          {/* Giá bán */}
          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold mb-2">Giá bán</h3>
            <div className="flex flex-col gap-2">
              {[
                'Dưới 100.000đ',
                '100.000đ đến 300.000đ',
                '300.000đ đến 500.000đ',
                'Trên 500.000đ'
              ].map((price, i) => (
                <button
                  key={i}
                  className={`w-full border rounded-lg px-3 py-2 text-sm text-left hover:bg-blue-50 ${
                    selectedPrice === price ? 'border-blue-600 text-blue-600' : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedPrice(price)}
                >
                  {price}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* DANH SÁCH SẢN PHẨM */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">📦 Danh sách sản phẩm</h2>
            <select className="border rounded px-3 py-1 text-sm">
              <option>Sắp xếp theo: Bán chạy</option>
              <option>Giá tăng dần</option>
              <option>Giá giảm dần</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productsData.map((product, index) => (
              <div key={index} className="bg-white p-3 rounded-xl shadow relative">
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}

                <img
                  src={product.image.replace('src/', '/')}
                  alt={product.product_name}
                  className="w-full h-[160px] object-contain mb-2"
                />
                <h3 className="font-medium text-sm line-clamp-2 h-10">{product.product_name}</h3>

                <div className="text-red-600 font-semibold text-sm">
                  {product.current_price.toLocaleString('vi-VN')}₫
                </div>
                {product.original_price && (
                  <div className="text-gray-500 text-xs line-through">
                    {product.original_price.toLocaleString('vi-VN')}₫
                  </div>
                )}
                <div className="text-xs text-gray-500 mb-2">Đơn vị: {product.unit}</div>

                <button className="w-full bg-blue-600 text-white text-sm rounded-md py-1 hover:bg-blue-700 transition">
                  Chọn mua
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
