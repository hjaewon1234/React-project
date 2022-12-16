import CartProductCardComp from "./Component";

const CartProductCardContainer = ({ productId = 1 }) => {
  return (
    <CartProductCardComp
      brand={"달팽이리빙"}
      name={"푸벨드마망 라운드 원터치 휴지통(7L)"}
      price={12900}
    ></CartProductCardComp>
  );
};

export default CartProductCardContainer;
