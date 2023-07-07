import { useContext } from "react";
import ProfileContext from "../context/profileContext";
import { useParams } from "react-router-dom";
import ShareAlbumForm from "../components/shareAlbumForm";
import ShareAlbumButton from "../components/shareAlbumButton";
import ProfileIntro from "../components/profileIntro";
import BuyAlbumButton from "../components/buyAlbumButton";
import Gallery from "../components/gallery";
import { DatabankInterface } from "../databank";

interface Props {
  cartItems: DatabankInterface["gallery"];
  addToCart: (newItems: DatabankInterface["gallery"]) => void;
}

const SingleProfile = ({ cartItems, addToCart }: Props) => {
  const { id: profileId } = useParams();
  const profiles = useContext(ProfileContext);

  if (!profiles) {
    // Handle the case when profiles is undefined
    return <div>Loading...</div>;
  }

  const currentProfile: DatabankInterface | undefined = profiles.find(
    (prod) => prod.id === profileId
  );

  if (!currentProfile) {
    // Handle the case when currentProfile is undefined
    return <div>Loading...</div>;
  }

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
