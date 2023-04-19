import React, { Component } from "react";
import { Link } from "react-router-dom";

const SiteHeader = ({ totalItems }) => {
  return (
    <header id="app-header" className="app_header">
      <Link to="/" className="site_branding">
        <h1>
          <span>Photo</span>Studio.
        </h1>
      </Link>
      <Link to="/shopping-cart" id="shoping-cart" className="shopping_cart">
        <div className="cart-wrapper">
          <span> {totalItems === 0 ? null : `${totalItems} photos`}</span>
          <img src="../../img/shopping-cart.svg" alt="shopping cart icon" />
        </div>
      </Link>
    </header>
  );
};

export default SiteHeader;
