import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReadMoreOrderInfoComponent from "./Component";

const ReadMoreOrderInfoContainer = ({ item }) => {
  const brand = item?.brand;
  const name = item?.name;
  const price = item?.price;

  const addCart = async (orderCount) => {
    try {
      const data = await axios.post("/api/cart/addcart", {
        productId: item.id,
        count: orderCount,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ReadMoreOrderInfoComponent
      brand={brand}
      name={name}
      price={price}
      addCart={addCart}
    />
  );
};

export default ReadMoreOrderInfoContainer;
