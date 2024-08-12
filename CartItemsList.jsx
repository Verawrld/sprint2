import React from "react";
import { useShoppingCart } from "../ShoppingCartContext";
import "./CartItemsList.css";

const CartItemsList = () => {
  const { cartItems } = useShoppingCart();

  return (
    <div className="cart-items-list">
      <h3>Items Added</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>
                {item.quantity} x ${item.price}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartItemsList;