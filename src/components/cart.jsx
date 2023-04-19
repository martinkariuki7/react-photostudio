import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const handleRemoveFromCart = (image) => {
    const newItems = cartItems.filter((item) => item.id !== image);
    removeFromCart([...newItems]);
  };

  return (
    <div>
      <h1>Shopping cart</h1>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.src} alt={item.id} />
            <span
              onClick={() => {
                handleRemoveFromCart(item.id);
              }}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
