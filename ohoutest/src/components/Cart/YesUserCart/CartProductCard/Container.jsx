import { useEffect, useState } from "react";
import CartProductCardComp from "./Component";

const CartProductCardContainer = ({
  totalState,
  totalCount,
  setTotalState,
  setTotalCount,
}) => {
  return (
    <>
      <CartProductCardComp
        brand={"달팽이리빙"}
        name={"푸벨드마망 라운드 원터치 휴지통(7L)"}
        price={12900}
        totalState={totalState}
        totalCount={totalCount}
        setTotalState={setTotalState}
        setTotalCount={setTotalCount}
        index={0}
        count={3}
      ></CartProductCardComp>
      <CartProductCardComp
        brand={"달팽이빙빙"}
        name={"휴지통(20L)"}
        price={99900}
        totalState={totalState}
        totalCount={totalCount}
        setTotalState={setTotalState}
        setTotalCount={setTotalCount}
        index={1}
        count={2}
      ></CartProductCardComp>
    </>
  );
};

export default CartProductCardContainer;
