import React from 'react';
import productsData from '../data.js';
const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {productsData.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.product_name}</h3>
            <p>Current Price: {product.current_price.toLocaleString('vi-VN')}₫</p>
            {product.original_price && (
              <p>Original Price: <del>{product.original_price.toLocaleString('vi-VN')}₫</del></p>
            )}
            <p>Unit: {product.unit}</p>
            {product.discount && (
              <p>Discount: {product.discount}</p>
            )}
            {/* Lưu ý: Đối với ảnh trong React, bạn cần đảm bảo rằng 
              đường dẫn hình ảnh đúng. Nếu đường dẫn là tuyệt đối từ thư mục `public` 
              thì bạn có thể dùng `process.env.PUBLIC_URL + '/assets/images/products/1.webp'`
              Nếu ảnh nằm trong thư mục `src` và bạn đang dùng Create React App, 
              bạn cần import từng ảnh hoặc xử lý thông qua webpack (ví dụ: require(path)).
              Cách đơn giản nhất là đặt ảnh vào thư mục `public`
              và sử dụng đường dẫn tương đối từ `public`.
              Ví dụ: nếu ảnh nằm ở `public/assets/images/products/1.webp`, 
              thì `src` sẽ là `'/assets/images/products/1.webp'`.
              
              Với đường dẫn `src/assets/images/products/1.webp` trong JSON của bạn,
              bạn cần cấu hình webpack hoặc import động từng ảnh.
              Để đơn giản cho ví dụ này, tôi sẽ giả định ảnh nằm trong thư mục `public`
              hoặc bạn đã có cơ chế import ảnh đúng.
              Nếu bạn đang dùng Create React App, cách tốt nhất là đặt ảnh vào thư mục `public`.
              Ví dụ: `public/images/products/1.webp` thì `product.image` sẽ là `'/images/products/1.webp'`
            */}
            <img 
              src={product.image.replace('src/', '/')} // Điều chỉnh đường dẫn ảnh cho phù hợp với cách bạn phục vụ ảnh
              alt={product.product_name} 
              className="product-image" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;