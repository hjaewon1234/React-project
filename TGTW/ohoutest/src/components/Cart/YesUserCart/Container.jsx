import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import YesUserCartComp from "./Component";

const YesUserCartContainer = ({ userInfo }) => {
  const [totalState, setTotalState] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [nonBuyModalOpen, setNonBuyModalOpen] = useState(false);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [confirmBuyModalOpen, setConfirmBuyModalOpen] = useState(false);
  const [item, setItem] = useState([]);

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

    setConfirmBuyModalOpen(!confirmBuyModalOpen);
  };

  const executePurchase = () => {
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

    axios.post("/api/order/buy", tempBuyAry).then(({ data }) => {
      if (!data.length < 1) setBuyModalOpen(!buyModalOpen);
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
        buyModalOpen={buyModalOpen}
        setBuyModalOpen={setBuyModalOpen}
        confirmBuyModalOpen={confirmBuyModalOpen}
        setConfirmBuyModalOpen={setConfirmBuyModalOpen}
        executePurchase={executePurchase}
      ></YesUserCartComp>
    </>
  );
};

export default YesUserCartContainer;
