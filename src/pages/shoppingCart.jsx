import React from "react";
import Cart from "../components/cart";

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  return <Cart cartItems={cartItems} removeFromCart={removeFromCart} />;
};

export default ShoppingCart;
