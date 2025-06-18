import React from 'react'
// Ví dụ trong một component ProductList.jsx hoặc HomePage.jsx
import ProductCard from '../features/products/components/ProductCard';

const HomePage = () => {
    const sampleProduct = {
        image: 'https://via.placeholder.com/150/007bff/ffffff?text=Enterogermina', // Thay bằng đường dẫn ảnh thật
        discountPercentage: 10,
        name: 'Hỗn dịch uống men vi sinh Enterogermina Gut Defense Sanofi...',
        currentPrice: 165000,
        oldPrice: 184000,
        unit: 'Hộp'
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Sản phẩm nổi bật</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProductCard product={sampleProduct} />
                {/* Thêm nhiều ProductCard khác với dữ liệu khác */}
            </div>
        </div>
    );
};

export default HomePage;
