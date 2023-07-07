import { handleAddToCart } from "../utils/addToCart";
import { DatabankInterface } from "../databank";

interface Props {
  cartItems: DatabankInterface[];
  currentProfile: DatabankInterface;
  addToCart: (newItems: DatabankInterface[]) => JSX.Element;
}

const BuyAlbumButton = ({ cartItems, currentProfile, addToCart }: Props) => {
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
