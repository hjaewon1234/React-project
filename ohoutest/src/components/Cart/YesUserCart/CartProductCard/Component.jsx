import { useEffect, useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

const CartProductCardComp = ({
  brand,
  name,
  price,
  setTotalState,
  setTotalCount,
  index,
  totalCount,
  count,
}) => {
  useEffect(() => {
    setTotalState((state) => {
      return [...state, 0];
    });
    setTotalCount((state) => {
      return [...state, +count];
    });
  }, []);

  const optionDiv = () => {
    return (
      <>
        <select
          name="count"
          onChange={(e) => {
            setTotalCount((state) => {
              const tempState = [...state];
              tempState[index] = e.target.value;
              return tempState;
            });
          }}
          key={uuid()}
          defaultValue={totalCount[index]}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            if (index == count) {
              return (
                <option key={`count-${index}`} value={`${item}`}>
                  {item}
                </option>
              );
            } else
              return (
                <option key={`count-${index}`} value={`${item}`}>
                  {item}
                </option>
              );
          })}
        </select>
        <div className="option-count">{`${(
          price * totalCount[index]
        ).toLocaleString()} 원`}</div>
      </>
    );
  };

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
          <p className="p768px">
            [{brand}] {name}
          </p>
          <div>
            <div className="p768px">
              <span>무료배송</span>
              <hr />
              <span>일반택배</span>
            </div>
          </div>
        </div>
      </MainView>
      <CountView>
        <div>
          <div>
            <div>{name}</div>
            <div
              className="deleteBtn"
              onClick={() => {
                console.log(index, "번째 아이템 삭제 버튼 눌림");
              }}
            >
              X
            </div>
          </div>
          <div className="selectDiv">{optionDiv()}</div>
        </div>
      </CountView>
      <div className="optionDiv">
        <span>옵션변경 | 바로구매</span>{" "}
        <span>{`${(price * totalCount[index]).toLocaleString()} 원`}</span>
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
  min-width: 480px;

  .optionDiv {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .option-count {
    display: none;
  }
  .selectDiv {
    div {
      margin: 0px !important;
    }
    height: 20px;
  }
  @media (max-width: 768px) {
    & {
      flex-direction: row;
    }
    .container {
      display: none;
    }
    .optionDiv {
      display: none;
    }
    .option-count {
      display: block;
    }
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

  @media (max-width: 768px) {
    .p768px {
      display: none;
    }
  }
`;

const CountView = styled.div`
  width: 100%;
  background-color: #afafaf75;
  padding: 0px 20px;
  border-radius: 15px;
  color: #1a1c20;
  font-weight: 800;
  & > div {
    display: flex;
    flex-direction: column;
  }
  & > div > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  select {
    width: 100px;
  }

  .deleteBtn {
    cursor: pointer;
    background-color: #f0a500;
    color: #f4f4f4;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .deleteBtn:hover {
    background-color: #cf7500;
  }
`;

export default CartProductCardComp;
