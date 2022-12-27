import axios from "axios";

import CartProductCardComp from "./Component";

const CartProductCardContainer = ({
  totalCount,
  setTotalState,
  setTotalCount,
  item,
  getCartItem,
  totalState,
}) => {
  const deleteItem = (index) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      axios.post("/api/cart/deleteitem", { idx: item[index].id }).then(() => {
        getCartItem();
        setTotalCount((prev) => {
          return prev.filter((item, idx) => idx != index);
        });
        setTotalState((prev) => {
          return prev.filter((item, idx) => idx != index);
        });
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
            totalState={totalState}
            setTotalCount={setTotalCount}
            setTotalState={setTotalState}
            index={idx}
            count={elem.count}
            key={`item - ${idx}`}
            img={img}
            deleteItem={deleteItem}
          />
        );
      })}
    </>
  );
};

export default CartProductCardContainer;
