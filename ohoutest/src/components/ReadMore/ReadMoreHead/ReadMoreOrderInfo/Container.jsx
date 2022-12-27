import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ReadMoreOrderInfoComponent from "./Component";

const ReadMoreOrderInfoContainer = ({ item }) => {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const navigate = useNavigate();
  const brand = item?.brand;
  const name = item?.name;
  const price = item.price ? item.price : null;

  const addCart = async (orderCount, isNavigate) => {
    try {
      await axios
        .post("/api/cart/addcart", {
          productId: item.id,
          count: orderCount,
        })
        .then(() => {
          if (isNavigate) navigate(`/cart`);
          else {
            setCartModalOpen(!cartModalOpen);
          }
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
      cartModalOpen={cartModalOpen}
      setCartModalOpen={setCartModalOpen}
    />
  );
};

export default ReadMoreOrderInfoContainer;
