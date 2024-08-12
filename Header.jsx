import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../ShoppingCartContext";
import ShoppingCartDropdown from "./ShoppingCartDropdown";
import "./Header.css";

const Header = () => {
  const { cartItems } = useShoppingCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="header">
      <Link to="" className="site-name">
        Pound Town
      </Link>
      <div className="cart-container">
        <button onClick={toggleDropdown} className="cart-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
            alt="placeholder"
            className="cart-icon-img"
          />
          <span className="cart-count">{totalItems}</span>
        </button>
        {isDropdownVisible && <ShoppingCartDropdown />}
      </div>
    </header>
  );
};

export default Header;