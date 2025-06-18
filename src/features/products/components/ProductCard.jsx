import React from 'react';

const ProductCard = ({ product }) => {
    const {
        image,
        discountPercentage,
        name,
        currentPrice,
        oldPrice,
        unit
    } = product;

    return (
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden max-w-[300px] mx-auto group">
            {/* Discount Badge */}
            {discountPercentage && (
                <div className="absolute top-0 left-0 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-br-lg z-10">
                    -{discountPercentage}%
                </div>
            )}

            {/* Product Image */}
            <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                    src={image} // Sử dụng prop 'image'
                    alt={name} // Sử dụng prop 'name'
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col items-start">
                <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[40px]">
                    {name}
                </h3>
                <div className="flex items-end gap-2 mb-3">
                    <span className="text-xl font-bold text-sky-600">
                        {currentPrice.toLocaleString('vi-VN')}₫
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                        {oldPrice.toLocaleString('vi-VN')}₫
                    </span>
                    <span className="text-gray-700">/ {unit}</span>
                </div>

                {/* Select Product Button */}
                <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    Chọn sản phẩm
                </button>
            </div>
        </div>
    );
};

export default ProductCard;