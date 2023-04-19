import React from "react";
import { handleAddToCart } from "../utils/addToCart";

const BuyAlbumButton = ({ cartItems, currentProfile, addToCart }) => {
  return (
    <button
      onClick={() =>
        handleAddToCart(cartItems, currentProfile.gallery, addToCart)
      }
      className="primary"
      id="buy-album"
    >
      Buy album
    </button>
  );
};

export default BuyAlbumButton;
