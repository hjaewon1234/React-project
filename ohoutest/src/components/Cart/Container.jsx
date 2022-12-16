import CartComponent from "./Component";
import YesUserCartContainer from "./YesUserCart/Container";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const navigation = useNavigate();
  let userInfo;
  useSelector((state) => {
    console.log(state.userInfo);
    userInfo = state.userInfo;
  });
  return (
    <>
      <YesUserCartContainer></YesUserCartContainer>
      {/* {userInfo.id ? (
        <div>{userInfo.id}님의 장바구니입니다.</div>
      ) : (
        <CartComponent navigate={navigation} />
      )} */}
    </>
  );
};

export default CartContainer;
