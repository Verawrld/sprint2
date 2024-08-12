import React, { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    province: "",
    phone: "",
    email: "",
    paymentMethod: "creditCard", // Default payment method
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderNumber = Math.floor(Math.random() * 1000000);
    alert(`Order saved! Your order number is ${orderNumber}`);
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      postalCode: "",
      city: "",
      province: "",
      phone: "",
      email: "",
      paymentMethod: "creditCard",
    });
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="form-group-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="form-group-row">
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="province">Province</label>
          <input
            type="text"
            id="province"
            name="province"
            value={formData.province}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Checkout Items Section */}
      <div className="checkout-items">{/* Add your checkout items here */}</div>

      {/* Payment Options Section */}
      <div className="form-group">
        <label htmlFor="paymentMethod">Payment Method</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Bank Transfer</option>
        </select>
      </div>

      {formData.paymentMethod === "creditCard" && (
        <>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="expiryMonth">Expiry Month</label>
              <input
                type="text"
                id="expiryMonth"
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryYear">Expiry Year</label>
              <input
                type="text"
                id="expiryYear"
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="security-code">
            <div className="form-group">
              <label htmlFor="securityCode">Security Code</label>
              <input
                type="text"
                id="securityCode"
                name="securityCode"
                value={formData.securityCode}
                onChange={handleChange}
              />
            </div>
          </div>
        </>
      )}

      <button type="submit" className="submit">
        Submit Order
      </button>
    </form>
  );
};

export default CheckoutForm;
