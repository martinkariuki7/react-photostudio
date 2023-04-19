import React, { useContext } from "react";
import ProfileContext from "../context/profileContext";
import { useParams } from "react-router-dom";
import ShareAlbumForm from "../components/shareAlbumForm";
import ShareAlbumButton from "../components/shareAlbumButton";
import ProfileIntro from "../components/profileIntro";
import BuyAlbumButton from "../components/buyAlbumButton";
import Gallery from "../components/gallery";

const SingleProfile = ({ cartItems, addToCart }) => {
  const { id: profileId } = useParams();
  const profiles = useContext(ProfileContext);
  const currentProfile = profiles.find((prod) => prod.id === profileId);

  return (
    <div>
      <div className="profile_intro">
        <ProfileIntro currentProfile={currentProfile} />
        <div className="profile_top_buttons">
          <BuyAlbumButton
            currentProfile={currentProfile}
            addToCart={addToCart}
            cartItems={cartItems}
          />
          <div className="share-album-wrapper">
            <ShareAlbumButton />
            <ShareAlbumForm currentProfile={currentProfile} />
          </div>
        </div>
      </div>
      <div className="childpages_profiles_wrapper">
        <Gallery
          gallery={currentProfile.gallery}
          currentProfile={currentProfile}
          cartItems={cartItems}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default SingleProfile;
