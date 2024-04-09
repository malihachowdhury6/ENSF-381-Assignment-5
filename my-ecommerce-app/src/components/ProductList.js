import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ onAddToCart }) => {
  // Define state to store the product data retrieved from the backend
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend API endpoint

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/Products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  }; 
  
  fetchProducts();
  }, []);


  return (
    <div className="product-list">
		{products.map((product) => (
		    <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
		))}
    </div>
  );
};

export default ProductList;
