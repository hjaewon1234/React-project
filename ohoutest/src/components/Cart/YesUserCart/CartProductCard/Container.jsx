import CartProductCardComp from "./Component";

const CartProductCardContainer = ({
  totalCount,
  setTotalState,
  setTotalCount,
  item,
  setItem,
}) => {
  const deleteLocalItem = (idx) => {
    const tempArr = [];
    for (let i = 0; i < item.length; i++) {
      if (idx !== i) {
        tempArr.push(item[i]);
      }
    }
    setItem(tempArr);
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
