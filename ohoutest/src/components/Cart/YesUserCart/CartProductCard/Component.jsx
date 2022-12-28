import { useEffect } from "react";
import styled from "styled-components";

import PublicModalBase from "../../../PublicModalBase";

const CartProductCardComp = ({
  brand,
  name,
  price,
  setTotalState,
  setTotalCount,
  index,
  totalCount,
  count,
  img,
  deleteItem,
  totalState,
  deleteItemModalOpen,
  setDeleteItemModalOpen,
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
      <div className="inc-dec-cont">
        <button
          onClick={() => {
            setTotalCount((prev) => {
              if ([...prev][index] === 1) return prev;
              const temp = [...prev];
              temp[index]--;
              return temp;
            });
          }}
        >
          <img src="/img/minus-solid.svg" />
        </button>
        <input
          type="number"
          value={totalCount[index] || 0}
          onChange={(e) => {
            setTotalCount((prev) => {
              const temp = [...prev];
              temp[index] = e.target.value;
              if (temp[index] > 1000) temp[index] = 999;
              else if (temp[index] < 2) temp[index] = 1;
              return temp;
            });
          }}
        />
        <button
          onClick={() => {
            setTotalCount((prev) => {
              const temp = [...prev];
              temp[index]++;
              if (temp[index] > 999) temp[index] = 999;
              return temp;
            });
          }}
        >
          <img src="/img/plus-solid.svg" />
        </button>
      </div>
    );
  };

  return (
    <CartProductCardBox>
      <div>
        <label className="container">
          <input
            type="checkbox"
            onChange={() => {
              setTotalState((state) => {
                let tempState = [...state];
                !tempState[index]
                  ? (tempState[index] = price)
                  : (tempState[index] = 0);
                return tempState;
              });
            }}
            checked={totalState[index] ? true : false}
          />{" "}
          오늘출발 평일 12:00까지 결제시
        </label>
      </div>
      <MainView>
        <img src={`/api/download${img}`} />
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
            <div className="count-view-name">{name}</div>
            <div
              className="deleteBtn"
              onClick={() => {
                setDeleteItemModalOpen(index);
              }}
            >
              X
            </div>
          </div>
          <div className="selectDiv">{optionDiv()}</div>
        </div>
      </CountView>
      {deleteItemModalOpen > -1 && (
        <PublicModalBase>
          <div className="del-cart-modal">
            <div className="del-cart-modal-head">알 림</div>
            <div className="del-cart-modal-inner">
              <div>정말로 삭제하시겠습니까?</div>
              <div className="btn-cont">
                <button
                  className="del-cart-modal-inner-btn"
                  onClick={() => {
                    deleteItem(deleteItemModalOpen);
                  }}
                >
                  확 인
                </button>
                <button
                  className="del-cart-modal-inner-btn"
                  onClick={() => {
                    setDeleteItemModalOpen(-1);
                  }}
                >
                  취 소
                </button>
              </div>
            </div>
          </div>
        </PublicModalBase>
      )}
      <div className="option-div">
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

  .inc-dec-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #f0a500;
  }
  .selectDiv input {
    width: 50px;
    height: 25px;
    border: none;
    background: #f4f4f4;
    font-size: 16px;
    text-align: center;
  }
  .selectDiv input:focus {
    outline: none;
  }
  .selectDiv button {
    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
    padding: 2px;
    height: 100%;
  }
  .selectDiv button img {
    width: 14px;
  }
  .del-cart-modal {
    width: 500px;
    height: 300px;
    background: #f4f4f4;
    border-radius: 20px;
  }
  .del-cart-modal-head {
    width: 100%;
    height: 50px;
    background: #f0a500;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .del-cart-modal .del-cart-modal-inner {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .del-cart-modal .del-cart-modal-inner > div {
    margin: 10% 0;
  }
  .del-cart-modal-inner-btn {
    width: 200px;
    height: 50px;
    background: #f0a500;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    cursor: pointer;
    @media only screen and (max-width: 425px) {
      width: 100px;
    }
  }
  .del-cart-modal-inner-btn + button {
    margin-left: 20px;
  }
  .del-cart-modal button:hover {
    background: #cf7500 !important;
  }

  @media only screen and (max-width: 768px) {
    & + &:before {
      content: "";
      width: 100%;
      height: 20px;
      border-top: 1px solid #f0a500;
    }
  }
  @media only screen and (max-width: 425px) {
    padding: 0 5px;
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

  @media only screen and (max-width: 1440px) {
    .p768px {
      white-space: initial;
      text-align: initial;
    }
  }
  @media only screen and (max-width: 1024px) {
    // width: 700px;
  }
  @media only screen and (max-width: 768px) {
    // width: 420px;
  }
  @media only screen and (max-width: 425px) {
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
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  .deleteBtn:hover {
    background-color: #cf7500;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .count-view-name {
    text-align: initial;
  }
`;

export default CartProductCardComp;
