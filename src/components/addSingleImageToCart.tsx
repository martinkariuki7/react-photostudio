import { handleAddToCart } from "../utils/addToCart";
import { DatabankInterface } from "../databank";

interface Props {
  cartItems: DatabankInterface["gallery"];
  id: string;
  src: string;
  addToCart: (newItems: DatabankInterface["gallery"]) => void;
}

const AddSingleImageToCart = ({ cartItems, id, src, addToCart }: Props) => {
  return (
    <button
      onClick={() => handleAddToCart(cartItems, [{ id, src }], addToCart)}
      className="primary_small"
    >
      Add to cart
    </button>
  );
};

export default AddSingleImageToCart;
