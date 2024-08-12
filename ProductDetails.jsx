import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api';
import { useShoppingCart } from '../ShoppingCartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(parseInt(id));
  const { addToCart } = useShoppingCart();

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;