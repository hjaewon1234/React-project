import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ReadMoreOrderInfoComponent from "./Component";

const ReadMoreOrderInfoContainer = ({ item }) => {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [nonLoginModalOpen, setNonLoginModalOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const state = useSelector((state) => state);
  useEffect(() => {
    if (state.userInfo.userId) setIsOnline(true);
    else setIsOnline(false);
  });
  const navigate = useNavigate();
  const brand = item?.brand;
  const name = item?.name;
  const price = item.price ? item.price : null;

  const addCart = async (orderCount, isNavigate) => {
    if (!isOnline) {
      setNonLoginModalOpen(true);
      return;
    }

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
      nonLoginModalOpen={nonLoginModalOpen}
      setNonLoginModalOpen={setNonLoginModalOpen}
    />
  );
};

export default ReadMoreOrderInfoContainer;
