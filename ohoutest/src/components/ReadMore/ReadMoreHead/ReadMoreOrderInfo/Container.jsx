import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReadMoreOrderInfoComponent from "./Component";

const ReadMoreOrderInfoContainer = ({ item }) => {
  const navigate = useNavigate();
  const brand = item?.brand;
  const name = item?.name;
  const price = item.price ? item.price : null;

  const addCart = async (orderCount, isNavigate) => {
    try {
      await axios
        .post("/api/cart/addcart", {
          productId: item.id,
          count: orderCount,
        })
        .then(() => {
          if (isNavigate) navigate(`/cart`);
          else {
            if (
              window.confirm(
                "장바구니에 추가 되었습니다. 장바구니로 이동하시겠습니까?"
              )
            ) {
              navigate(`/cart`);
            }
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ReadMoreOrderInfoComponent
      brand={brand}
      name={name}
      price={price}
      addCart={addCart}
    />
  );
};

export default ReadMoreOrderInfoContainer;
