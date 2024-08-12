import React from 'react';
import { getProducts, getEquipment } from '../api';
import ProductCard from './ProductCard';
import './ProductList.css';


const ProductList = () => {
  const products = getProducts();
  const equipment = getEquipment();
  
return (
  <div className="product-list-page">
    <h1>Products</h1>
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <h1>Equipment</h1>
    <div className="product-grid">
      {equipment.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  </div>
);
};

export default ProductList;