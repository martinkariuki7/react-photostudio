import React from "react";
import { handleAddToCart } from "../utils/addToCart";

const AddSingleImageToCart = ({ cartItems, id, src, addToCart }) => {
  return (
    <button
      onClick={() =>
        handleAddToCart(
          cartItems,
          [
            {
              id,
              src,
            },
          ],
          addToCart
        )
      }
      className="primary_small"
    >
      Add to cart
    </button>
  );
};

export default AddSingleImageToCart;
