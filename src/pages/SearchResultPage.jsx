import React, { useState, useEffect } from 'react';
import productsData from '../data.js';

const SearchResultPage = () => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [sortOption, setSortOption] = useState('popular');
  const [selectedTargets, setSelectedTargets] = useState(['Tất cả']);
  const [selectedOrigins, setSelectedOrigins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const handleTargetChange = (value) => {
    if (value === 'Tất cả') {
      setSelectedTargets(['Tất cả']);
    } else {
      const updated = selectedTargets.includes(value)
        ? selectedTargets.filter((item) => item !== value)
        : [...selectedTargets.filter((item) => item !== 'Tất cả'), value];
      setSelectedTargets(updated.length > 0 ? updated : ['Tất cả']);
    }
  };

  const handleOriginChange = (origin) => {
    setSelectedOrigins(prev =>
      prev.includes(origin)
        ? prev.filter(item => item !== origin)
        : [...prev, origin]
    );
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPrice, selectedTargets, selectedOrigins, sortOption]);

  const filterProducts = () => {
    return productsData.filter(product => {
      const targetMatch = selectedTargets.includes('Tất cả') || product.target_audience.some(t => selectedTargets.includes(t));
      const originMatch = selectedOrigins.length === 0 || selectedOrigins.includes(product.origin);
      const priceMatch = !selectedPrice || selectedPrice === product.price_range;
      return targetMatch && originMatch && priceMatch;
    });
  };

  const getSortedProducts = () => {
    let sorted = [...filterProducts()];
    if (sortOption === 'low') {
      sorted.sort((a, b) => a.current_price - b.current_price);
    } else if (sortOption === 'high') {
      sorted.sort((a, b) => b.current_price - a.current_price);
    }
    return sorted;
  };

  const sortedProducts = getSortedProducts();
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
//bg-[#f5f7fa]
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-6">

        {/* Bộ lọc nâng cao */}
        <div className="w-full md:w-1/4 bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold flex items-center gap-1 mb-4">
            <span className="text-lg">☰</span> Bộ lọc nâng cao
          </h2>

          {/* Đối tượng sử dụng */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Đối tượng sử dụng</h3>
            <div className="flex flex-col gap-2 text-base">
              {['Tất cả', 'Người cao tuổi', 'Trẻ em', 'Người lớn', 'Phụ nữ có thai'].map((target, i) => (
                <label key={i} className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-blue-500 cursor-pointer"
                    checked={selectedTargets.includes(target)}
                    onChange={() => handleTargetChange(target)}
                  />
                  {target}
                </label>
              ))}
            </div>
          </div>

          {/* Xuất xứ */}
          <div className="mb-4 border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Xuất xứ</h3>
            <div className="flex flex-col gap-2 text-base">
              {['Việt Nam', 'Thái Lan', 'Ấn Độ', 'Hoa Kỳ', 'Anh'].map((origin, i) => (
                <label key={i} className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-blue-500 cursor-pointer"
                    checked={selectedOrigins.includes(origin)}
                    onChange={() => handleOriginChange(origin)}
                  />
                  {origin}
                </label>
              ))}
            </div>
          </div>

          {/* Giá bán */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Giá bán</h3>
            <div className="flex flex-col gap-2">
              {[
                'Dưới 100.000đ',
                '100.000đ đến 300.000đ',
                '300.000đ đến 500.000đ',
                'Trên 500.000đ'
              ].map((price, i) => {
                const isSelected = selectedPrice === price;

                return (
                  <button
                    key={i}
                    onClick={() => setSelectedPrice(isSelected ? '' : price)}
                    className={`relative w-full border rounded-lg px-3 py-2 text-base text-center font-medium transition 
        ${isSelected ? 'border-blue-600 text-blue-600 bg-white' : 'border-gray-300 text-gray-800 bg-white hover:bg-blue-50'}`}
                  >
                    {price}

                    {/* Tam giác góc trên bên phải */}
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-0 h-0 border-t-[28px] border-l-[28px] border-t-blue-600 border-l-transparent rounded-tr-lg z-10">
                        <svg
                          className="absolute top-0 right-0 mt-[4px] mr-[4px] w-[12px] h-[12px] text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}


            </div>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <h2 className="text-xl font-semibold">Danh sách sản phẩm</h2>
            <div className="flex items-center gap-2">
              <span className="text-[15px] text-gray-700 font-medium">Sắp xếp theo:</span>
              <div className="flex gap-2">
                {[
                  { value: 'popular', label: 'Bán chạy' },
                  { value: 'low', label: 'Giá thấp' },
                  { value: 'high', label: 'Giá cao' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`relative px-4 py-1.5 rounded-full text-base border transition duration-200 ${sortOption === option.value
                      ? 'bg-white text-blue-600 border-blue-600 font-semibold'
                      : 'text-black border-gray-300 bg-white font-semibold'
                      }`}
                    onClick={() => setSortOption(option.value)}
                  >
                    {option.label}
                    {sortOption === option.value && (
                      <span className="absolute top-0 right-0 w-4 h-4 bg-blue-600 rounded-tr-full rounded-bl-full">
                        <svg
                          className="w-3 h-3 text-white absolute top-[1px] right-[1px]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid sản phẩm */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white p-3 rounded-xl shadow relative flex flex-col justify-between min-h-[400px] overflow-visible border border-transparent hover:border-blue-600 transition cursor-pointer"
              >
                {product.discount && (
                  <span className="absolute top-0 left-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tl-xl rounded-br-xl z-20 shadow-md">
                    {product.discount}
                  </span>
                )}
                <div>
                  <img
                    src={product.image.replace('src/', '/')}
                    alt={product.product_name}
                    className="w-full h-[140px] object-contain mb-2 transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="font-medium text-base line-clamp-3 mb-2">
                    {product.product_name}
                  </div>
                  <div className="text-blue-600">
                    <span className="font-semibold text-base">{product.current_price.toLocaleString('vi-VN')}₫</span> / {product.unit}
                  </div>
                  {product.original_price && (
                    <div className="text-gray-500 text-base line-through">
                      {product.original_price.toLocaleString('vi-VN')}₫
                    </div>
                  )}
                  <div className="mt-2 absolute bg-gray-200 text-sm text-gray-700 mb-2 text-center font-medium px-3 rounded-xl">
                    {product.quantity}
                  </div>
                </div>
                <button className="mt-2 w-full bg-blue-700 text-white text-sm rounded-3xl py-1 hover:bg-blue-500 transition">
                  Chọn mua
                </button>
              </div>
            ))}
          </div>

          {/* Phân trang */}
          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-lg text-sm font-medium border 
                  ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border-gray-300'}
                  hover:bg-blue-500 hover:text-white transition`}
              >
                {i + 1}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
