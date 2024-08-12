import React, { useState } from "react";
import { useShoppingCart } from "../ShoppingCartContext";
import CheckoutForm from "./CheckoutForm";
import CartItemsList from "./CartItemsList";
import "./Checkout.css";

const generateOrderCode = () => {
  return Math.random().toString(36).substr(2, 9).toUpperCase();
};

const Checkout = () => {
  const { cartItems, removeFromCart } = useShoppingCart();
  const orderCode = generateOrderCode();
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    province: "",
    phone: "",
    email: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Thanks for your order! Your order code is ${orderCode}.`);
    cartItems.forEach((item) => removeFromCart(item)); // Clear the cart
  };

  return (
    <div className="checkout-page">
      <div className="checkout-form-container">
        <h2>Checkout</h2>
        <CheckoutForm
          formData={formData}
          handleChange={handleFormChange}
          handleSubmit={handleCheckout}
        />
      </div>
      <CartItemsList />
    </div>
  );
};

export default Checkout;