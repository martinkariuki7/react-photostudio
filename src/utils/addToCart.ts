import { toast } from "react-toastify";
import { DatabankInterface } from "../databank";

export const handleAddToCart = (
  oldArray: DatabankInterface[],
  newArray: DatabankInterface[],
  addToCart: (arg: DatabankInterface[]) => void
): void => {
  let duplicateCount = 0;
  const filteredArray = newArray.filter((obj1) => {
    if (oldArray.some((obj2) => obj2.id === obj1.id)) {
      duplicateCount += 1;
      return false;
    }
    return true;
  });
  if (duplicateCount === 0) {
    toast.success("Photo successfully added to the shopping cart");
  } else if (duplicateCount > 0) {
    if (duplicateCount === 1) {
      toast.error("This photo is already in the shopping cart.");
    } else {
      toast.info(
        `${duplicateCount} photos were already on the shopping cart, the rest have been added successfully.`
      );
    }
  }
  addToCart(filteredArray);
};
