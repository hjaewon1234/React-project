import { useEffect, useState } from "react";
import styled from "styled-components";

const CartProductCardComp = ({
  brand,
  name,
  price,
  setTotalState,
  index,
  totalState,
}) => {
  useEffect(() => {
    setTotalState((state) => {
      console.log(state);
      return [...state, 0];
    });
  }, []);

  useEffect(() => {
    console.log("adf");
  }, [totalState]);
  console.log(totalState);

  return (
    <CartProductCardBox>
      <div>
        <label className="container">
          <input
            type="checkbox"
            onClick={() => {
              setTotalState((state) => {
                let tempState = [...state];
                !tempState[index]
                  ? (tempState[index] = price)
                  : (tempState[index] = 0);
                console.log(tempState);
                return tempState;
              });
            }}
          />{" "}
          오늘출발 평일 12:00까지 결제시
        </label>
      </div>
      <MainView>
        <img src="/api/downloadLG전자_LG디오스베이직오브제컬렉션1.jpg" />
        <div>
          <p>
            [{brand}] {name}
          </p>
          <div>
            <div>
              <span>무료배송</span>
              <hr />
              <span>일반택배</span>
            </div>
          </div>
        </div>
      </MainView>
      <CountView>{name}</CountView>
      <div className="optionDiv">
        <span>옵션변경 | 바로구매</span> <span>{price}</span>
      </div>
    </CartProductCardBox>
  );
};

const CartProductCardBox = styled.div`
  font-size: 0.8rem;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  .optionDiv {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const MainView = styled.div`
  display: flex;
  column-gap: 20px;
  margin: 10px 0px;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & > img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
  div > div {
    column-gap: 10px;
    display: flex;
    flex-direction: row;
  }
`;

const CountView = styled.div``;

export default CartProductCardComp;
