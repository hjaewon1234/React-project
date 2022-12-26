import CartProductCardComp from "./Component";

const CartProductCardContainer = ({
  totalCount,
  setTotalState,
  setTotalCount,
  item,
  setItem,
}) => {
  const deleteLocalItem = (idx) => {
    const tempArr = [
      ...item.slice(0, idx - 1),
      ...item.slice(idx + 1, item.length - 1),
    ];
    // console.log(idx);
    // console.log(tempArr);
    // console.log(...item.slice(0, idx - 1));
    // setItem((prev) => {
    //   return [...prev].splice(idx, 1);
    // });
    // setItem(tempArr);
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
