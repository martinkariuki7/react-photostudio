import React from "react";
import AddSingleImageToCart from "./addSingleImageToCart";

const Gallery = ({ gallery, cartItems, addToCart, currentProfile }) => {
  const { firstName, lastName } = currentProfile;

  return (
    <ul className="profiles_wrapper" id="gallery">
      {gallery.map((picture) => (
        <li key={picture.id} className="single_profile_inner">
          <figure>
            <img src={picture.src} alt={firstName + "" + lastName} />
            <figcaption className="profile_image_caption">
              <AddSingleImageToCart
                cartItems={cartItems}
                id={picture.id}
                src={picture.src}
                addToCart={addToCart}
              />
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
