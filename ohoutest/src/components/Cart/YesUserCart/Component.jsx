import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CartProductCardContainer from "./CartProductCard/Container";
import PublicModalBase from "../../PublicModalBase";
import CartComponent from "../Component";

const YesUserCartComp = ({
  totalState,
  totalCount,
  setTotalState,
  setTotalCount,
  buyOnClick,
  item,
  getCartItem,
  userInfo,
  nonBuyModalOpen,
  setNonBuyModalOpen,
  buyModalOpen,
  setBuyModalOpen,
  confirmBuyModalOpen,
  setConfirmBuyModalOpen,
  executePurchase,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  useEffect(() => {
    const totalArray = totalState.map((item, index) => {
      return +item * +totalCount[index];
    });
    setTotalPrice(
      totalArray.reduce((acc, cur) => {
        return acc + cur;
      }, 0)
    );
  }, [totalState, totalCount]);

  return (
    <>
      {item.length < 1 ? (
        <CartComponent navigate={navigate} target="main" />
      ) : (
        <BigBox>
          <SelectBox></SelectBox>
          <YesUserCartBox>
            <div className="">
              <div className="inner-head">
                {userInfo.userName}님의 장바구니 현황
              </div>
              <hr />
              <div>
                <CartProductCardContainer
                  totalCount={totalCount}
                  setTotalState={setTotalState}
                  setTotalCount={setTotalCount}
                  item={item}
                  getCartItem={getCartItem}
                  totalState={totalState}
                ></CartProductCardContainer>
              </div>
              <hr />
              <div>배송비 무료</div>
            </div>
            <SummaryBox>
              <div className="summary">
                <div>
                  <ul>
                    <li>
                      <p>총 상품금액</p>
                      <p>총 배송비</p>
                    </li>
                    <li>
                      <p>{totalPrice.toLocaleString()} 원</p>
                      <p>+ 0 원</p>
                    </li>
                  </ul>
                  <div>
                    <p>결제금액</p>
                    <p>{totalPrice.toLocaleString()} 원</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    buyOnClick();
                  }}
                >
                  상품 구매하기
                </button>
              </div>
            </SummaryBox>
          </YesUserCartBox>
          {nonBuyModalOpen && (
            <PublicModalBase>
              <div className="cart-modal">
                <div className="cart-modal-head">알 림</div>
                <div className="cart-modal-inner">
                  <div>주문할 상품을 선택해주세요</div>
                  <button
                    onClick={() => {
                      setNonBuyModalOpen(!nonBuyModalOpen);
                    }}
                  >
                    확 인
                  </button>
                </div>
              </div>
            </PublicModalBase>
          )}
          {buyModalOpen && (
            <PublicModalBase>
              <div className="cart-modal">
                <div className="cart-modal-head">주 문 완 료</div>
                <div className="cart-modal-inner">
                  <div>
                    주문이 완료되었습니다
                    <br />
                    감사합니다
                  </div>
                  <button
                    onClick={() => {
                      setBuyModalOpen(!buyModalOpen);
                      navigate(`/${state.userInfo.userId}/userPage/myShopping`);
                    }}
                  >
                    확 인
                  </button>
                </div>
              </div>
            </PublicModalBase>
          )}
          {confirmBuyModalOpen && (
            <PublicModalBase>
              <div className="conf-cart-modal">
                <div className="conf-cart-modal-head">알 림</div>
                <div className="conf-cart-modal-inner">
                  <div>선택된 상품을 주문합니다</div>
                  <div>
                    <button
                      onClick={() => {
                        executePurchase();
                        setConfirmBuyModalOpen(!confirmBuyModalOpen);
                      }}
                    >
                      확 인
                    </button>
                    <button
                      onClick={() => {
                        setConfirmBuyModalOpen(!confirmBuyModalOpen);
                      }}
                    >
                      취 소
                    </button>
                  </div>
                </div>
              </div>
            </PublicModalBase>
          )}
        </BigBox>
      )}
    </>
  );
};

export default YesUserCartComp;

const BigBox = styled.div`
  width: 100%;
  background-color: #afafaf75;
  min-width: 500px;
  .cart-modal {
    width: 500px;
    height: 300px;
    background: #f4f4f4;
    border-radius: 20px;
  }
  .cart-modal-head {
    width: 100%;
    height: 50px;
    background: #f0a500;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  .cart-modal .cart-modal-inner {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cart-modal .cart-modal-inner > div {
    margin: 10% 0;
  }
  .cart-modal .cart-modal-inner > button {
    width: 200px;
    height: 50px;
    background: #f0a500;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    cursor: pointer;
  }
  .cart-modal .cart-modal-inner > button:hover {
    background: #cf7500 !important;
  }

  .conf-cart-modal {
    width: 500px;
    height: 300px;
    background: #f4f4f4;
    border-radius: 20px;
  }
  .conf-cart-modal-head {
    width: 100%;
    height: 50px;
    background: #f0a500;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  .conf-cart-modal .conf-cart-modal-inner {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .conf-cart-modal .conf-cart-modal-inner > div:first-child {
    margin: 13% 0;
  }
  .conf-cart-modal .conf-cart-modal-inner > div button {
    width: 200px;
    height: 50px;
    background: #f0a500;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    cursor: pointer;
  }
  .conf-cart-modal .conf-cart-modal-inner > div button + button {
    margin-left: 20px;
  }
  .conf-cart-modal .conf-cart-modal-inner > div button:hover {
    background: #cf7500 !important;
  }
`;

const YesUserCartBox = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  column-gap: 10%;
  padding: 0px 0px 100px 0px;
  min-width: 460px;

  p {
    white-space: nowrap;
  }
  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 60%;
    border-radius: 10px;
    background-color: #f4f4f4;
    div {
    }
    .inner-head {
      margin: 10px 0px;
    }
    div:nth-child(3) {
    }
    div:last-child {
      margin: 10px 0px;
    }
    hr {
      color: #f4f4f4;
    }
  }
  & > div:last-child {
    width: 30%;
    border-radius: 10px;
  }
  .summary {
    position: sticky;
    top: 150px;
    row-gap: 20px;

    & > div {
      padding-top: 20px;
      width: 100%;
      background-color: #f4f4f4;
      border-radius: 15px;

      ul {
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        li {
          width: 40%;
          display: flex;
          flex-direction: column;
          row-gap: 15px;
        }
        li:first-child {
          text-align: left;
        }
        li:last-child {
          text-align: right;
          font-weight: 600;
        }
      }
      div {
        display: flex;
        justify-content: space-evenly;
        padding: 20px 0px;
        p {
          width: 40%;
        }
        p:first-child {
          text-align: left;
          margin: auto 0;
          font-weight: 600;
        }
        p:last-child {
          text-align: right;
          font-size: 1.5rem;
          font-weight: 600;
        }
      }
    }
    button {
      width: 100%;
      margin-top: 15px;
      padding: 15px 0px;
      border: none;
      border-radius: 10px;
      color: #f4f4f4;
      font-size: 1.2rem;
      background-color: #f0a500;
      font-weight: 800;
      cursor: pointer;
    }
    button:hover {
      background-color: #cf7500;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    & > div:first-child {
      width: 100%;
      margin-bottom: 50px;
    }
    & > div:last-child {
      width: 100%;
    }
  }
`;

const SelectBox = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 50px;
  display: flex;
  column-gap: 50px;
  & > div {
    width: 60%;
    display: flex;
  }
`;

const SummaryBox = styled.div``;
