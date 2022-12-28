import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import YesUserCartComp from "./Component";

const YesUserCartContainer = ({ userInfo }) => {
  const [totalState, setTotalState] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [nonBuyModalOpen, setNonBuyModalOpen] = useState(false);
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(false);
  const state = useSelector((state) => state);
  useEffect(() => {
    if (state.userInfo.userId) setIsOnline(true);
    else setIsOnline(false);
  });

  const buyOnClick = () => {
    const tempBuyAry = [];
    totalState.map((stateItem, index) => {
      if (stateItem != 0) {
        tempBuyAry.push({
          price: stateItem,
          num: totalCount[index],
          productId: item[index].products_id,
          userId: item[index].users_id,
          id: item[index].id,
        });
      }
    });
    if (tempBuyAry.length < 1) {
      setNonBuyModalOpen(!nonBuyModalOpen);
      return;
    }

    axios.post("/api/order/buy", tempBuyAry).then(({ data }) => {
      if (!data.length < 1) navigate("/main");
    });
  };

  const getCartItem = () => {
    if (!isOnline) return;
    axios
      .post("/api/cart/getCartItem", { userId: state.userInfo.userId })
      .then((data) => {
        setItem(data.data || []);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getCartItem();
    window.scrollTo(0, 0);
  }, [isOnline]);

  return (
    <>
      <YesUserCartComp
        totalState={totalState}
        setTotalState={setTotalState}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
        buyOnClick={buyOnClick}
        item={item}
        getCartItem={getCartItem}
        setItem={setItem}
        userInfo={userInfo}
        nonBuyModalOpen={nonBuyModalOpen}
        setNonBuyModalOpen={setNonBuyModalOpen}
      ></YesUserCartComp>
    </>
  );
};

export default YesUserCartContainer;
