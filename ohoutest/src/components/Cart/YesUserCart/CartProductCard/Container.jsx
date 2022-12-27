import axios from "axios";

import CartProductCardComp from "./Component";

const CartProductCardContainer = ({
  totalCount,
  setTotalState,
  setTotalCount,
  item,
  getCartItem,
}) => {
  const deleteLocalItem = (index) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      axios.post("/api/cart/deleteitem", { idx: item[index].id }).then(() => {
        getCartItem();
      });
    }
  };

  return (
    <>
      {item.map((elem, idx) => {
        const img = elem.Product.img.split(",")[0];
        return (
          <CartProductCardComp
            brand={elem.Product.brand}
            name={elem.Product.name}
            price={elem.Product.price}
            totalCount={totalCount}
            setTotalState={setTotalState}
            setTotalCount={setTotalCount}
            index={idx}
            count={elem.count}
            key={`item - ${idx}`}
            img={img}
            deleteLocalItem={deleteLocalItem}
          />
        );
      })}
    </>
  );
};

export default CartProductCardContainer;
