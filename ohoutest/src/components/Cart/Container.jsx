import CartComponent from "./Component";
import YesUserCartContainer from "./YesUserCart/Container";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CartContainer = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState();
  let userInfo = useSelector((state) => state.userInfo);
  useEffect(() => {
    setUser(userInfo);
  }, []);

  return (
    <>
      {userInfo?.userId ? (
        <CartContainerBox>
          <YesUserCartContainer userInfo={userInfo}></YesUserCartContainer>
        </CartContainerBox>
      ) : (
        <CartComponent navigate={navigation} />
      )}
    </>
  );
};

export default CartContainer;

const CartContainerBox = styled.div`
  & > p {
    padding: 20px 0px;
  }
  width: 80%;
  margin: 50px auto;
`;
