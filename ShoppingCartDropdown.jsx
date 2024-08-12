import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../ShoppingCartContext";
import "./ShoppingCartDropdown.css";

const ShoppingCartDropdown = () => {
  const { cartItems, removeFromCart } = useShoppingCart();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-dropdown">
      <h4>Shopping Cart</h4>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="subtotal">
            <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
          </div>
          <Link to="/checkout" className="checkout-button">
            Go to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default ShoppingCartDropdown;