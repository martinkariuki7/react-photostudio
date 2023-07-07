import Cart from "../components/cart";
import { DatabankInterface } from "../databank";

interface Props {
  cartItems: DatabankInterface["gallery"];
  removeFromCart: (newItems: DatabankInterface["gallery"]) => JSX.Element;
}

const ShoppingCart = ({ cartItems, removeFromCart }: Props) => {
  return <Cart cartItems={cartItems} removeFromCart={removeFromCart} />;
};

export default ShoppingCart;
