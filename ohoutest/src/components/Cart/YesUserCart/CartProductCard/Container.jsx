import { useEffect, useState } from "react";
import CartProductCardComp from "./Component";

const CartProductCardContainer = ({ totalState, setTotalState }) => {
  console.log("CartProductCardContainer", totalState);
  return (
    <>
      <CartProductCardComp
        brand={"달팽이리빙"}
        name={"푸벨드마망 라운드 원터치 휴지통(7L)"}
        price={12900}
        totalState={totalState}
        setTotalState={setTotalState}
        index={0}
      ></CartProductCardComp>
      <CartProductCardComp
        brand={"달팽이빙빙"}
        name={"휴지통(20L)"}
        price={99900}
        totalState={totalState}
        setTotalState={setTotalState}
        index={1}
      ></CartProductCardComp>
    </>
  );
};

export default CartProductCardContainer;
