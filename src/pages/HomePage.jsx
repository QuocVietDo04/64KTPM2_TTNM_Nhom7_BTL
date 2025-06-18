import React, { useState } from 'react';
import productsData from '../data.js';
import ProductCard from '../features/products/components/ProductCard';

const HomePage = () => {
  const [selectedPrice, setSelectedPrice] = useState('');

  return (
    <div className="homepage-container">
      <h1>Our Products</h1>
      <div className="product-grid">
        {productsData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
