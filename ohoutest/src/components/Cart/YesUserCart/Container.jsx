import YesUserCartComp from "./Component";
import { useEffect, useState } from "react";
import axios from "axios";

const YesUserCartContainer = ({ userInfo }) => {
  const [totalState, setTotalState] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [item, setItem] = useState([]);

  const buyOnClick = () => {
    const tempBuyAry = [];
    console.log(item);
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
    console.log(tempBuyAry);

    axios.post("/api/order/buy", tempBuyAry).then(({ data }) => {
      console.log(data);
    });
  };

  const getCartItem = () => {
    axios
      .post("/api/cart/getCartItem")
      .then((data) => {
        setItem(data.data || []);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getCartItem();
    window.scrollTo(0, 0);
  }, []);

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
      ></YesUserCartComp>
    </>
  );
};

export default YesUserCartContainer;
