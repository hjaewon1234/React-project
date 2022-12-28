import axios from "axios";
import { useState } from "react";

import CartProductCardComp from "./Component";

const CartProductCardContainer = ({
  totalCount,
  setTotalState,
  setTotalCount,
  item,
  getCartItem,
  totalState,
}) => {
  const [deleteItemModalOpen, setDeleteItemModalOpen] = useState(-1);

  const deleteItem = (index) => {
    axios.post("/api/cart/deleteitem", { idx: item[index].id }).then(() => {
      getCartItem();
      setDeleteItemModalOpen(-1);
      setTotalCount((prev) => {
        return prev.filter((item, idx) => idx != index);
      });
      setTotalState((prev) => {
        return prev.filter((item, idx) => idx != index);
      });
    });
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
            deleteItemModalOpen={deleteItemModalOpen}
            setDeleteItemModalOpen={setDeleteItemModalOpen}
          />
        );
      })}
    </>
  );
};

export default CartProductCardContainer;
