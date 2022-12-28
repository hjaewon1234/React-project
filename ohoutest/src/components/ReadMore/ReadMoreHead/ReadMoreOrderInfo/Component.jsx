import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PublicModalBase from "../../../PublicModalBase";

const ReadMoreOrderInfoComponent = ({
  brand,
  name,
  price,
  addCart,
  cartModalOpen,
  setCartModalOpen,
  nonLoginModalOpen,
  setNonLoginModalOpen,
}) => {
  const [orderCount, setOrderCount] = useState(1);
  const navigate = useNavigate();

  let totalSum = orderCount * price;

  return (
    <ReadMoreOrderInfoBox>
      <div className="product-brand">{brand}</div>
      <div className="product-name">{name}</div>
      <div className="product-price">{price?.toLocaleString()} 원</div>
      <hr />
      <div className="product-delivery">
        <div>배송</div>
        <div>상품정보 참고</div>
      </div>
      <hr />
      <div className="to-store">
        <img src="/img/store.png" />
        <span>{brand}</span>
        {/* <a href="http://naver.com" target={"_blank"}>
          <span>브랜드홈</span>
          <img src="/img/chevron-right-solid.svg" />
        </a> */}
      </div>
      <hr />
      <div className="order-count">
        <div>
          <button
            onClick={() => {
              if (orderCount < 2) return;
              setOrderCount((prev) => prev - 1);
            }}
          >
            <img src="/img/minus-solid.svg" />
          </button>
          <input
            type="number"
            value={orderCount}
            onChange={({ target: { value } }) => {
              if (value < 2) value = 1;
              else if (value > 999) value = 999;
              setOrderCount(+value);
            }}
          />
          <button
            onClick={() => {
              setOrderCount((prev) => {
                if (prev > 998) return 999;
                return prev + 1;
              });
            }}
          >
            <img src="/img/plus-solid.svg" />
          </button>
        </div>
      </div>
      <div className="order-sum">
        <div>주문금액</div>
        <div>{totalSum.toLocaleString()} 원</div>
      </div>
      <hr />
      <div className="order-btn">
        <button
          onClick={() => {
            addCart(orderCount, false);
          }}
        >
          장바구니
        </button>
        <button
          onClick={() => {
            addCart(orderCount, true);
          }}
        >
          주문하기
        </button>
      </div>
      <div className="order-ad">
        <img src="/img/read-more-ad.webp" />
      </div>
      {cartModalOpen && (
        <PublicModalBase>
          <div className="cart-modal">
            <div className="cart-modal-head">알 림</div>
            <div className="cart-modal-inner">
              <div>상품을 장바구니로 담았습니다</div>
              <button
                onClick={() => {
                  setCartModalOpen(!cartModalOpen);
                }}
              >
                확 인
              </button>
            </div>
          </div>
        </PublicModalBase>
      )}
      {nonLoginModalOpen && (
        <PublicModalBase>
          <div className="cart-modal">
            <div className="cart-modal-head">알 림</div>
            <div className="cart-modal-inner">
              <div>먼저 로그인을 해주세요</div>
              <button
                onClick={() => {
                  // setNonLoginModalOpen(!nonLoginModalOpen);
                  navigate("/login");
                }}
              >
                확 인
              </button>
            </div>
          </div>
        </PublicModalBase>
      )}
    </ReadMoreOrderInfoBox>
  );
};

export default ReadMoreOrderInfoComponent;

const ReadMoreOrderInfoBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: initial;
  row-gap: 20px;

  .product-brand {
    color: #656e75;
    font-weight: bold;
    font-size: 14px;
  }
  .product-name {
    font-size: 26px;
  }
  .product-price {
    font-size: 30px;
    font-weight: bold;
  }
  hr {
    border-bottom: none;
    border-top: 1px solid #f0a500;
  }
  .product-delivery {
    display: flex;
    column-gap: 10px;
    font-size: 14px;
  }
  .product-delivery div {
    display: inline-block;
  }
  .product-delivery > div:first-child {
    color: grey;
  }
  .to-store {
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 14px;
  }
  .to-store span {
    flex-grow: 1;
  }
  .to-store > img {
    width: 30px;
  }
  .to-store a {
    text-decoration: none;
    color: grey;
    border-radius: 10px;
    background: lightgrey;
    font-weight: bold;
    padding: 2px 10px;
    display: flex;
  }
  .to-store a img {
    width: 10px;
    filter: invert(44%) sepia(98%) saturate(1%) hue-rotate(42deg)
      brightness(94%) contrast(91%);
  }
  .order-count {
    text-align: right;
  }
  .order-count > div {
    display: inline-flex;
    align-content: center;
    justify-content: center;
    border: 1px solid lightgrey;
  }
  .order-count button {
    width: 38px;
    height: 38px;
    border: none;
    cursor: pointer;
  }
  .order-count button img {
    width: 14px;
  }
  .order-count input {
    width: 50px;
    height: 38px;
    border: none;
    background: #f4f4f4;
    font-size: 18px;
    text-align: center;
  }
  .order-count input:focus {
    outline: none;
    border: 2px solid black;
  }
  .order-count input[type="number"]::-webkit-outer-spin-button,
  .order-count input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .order-sum {
    display: flex;
    justify-content: space-between;
  }
  .order-sum > div {
    font-size: 18px;
    display: flex;
    align-items: center;
  }
  .order-sum > div + div {
    font-size: 30px;
    font-weight: bold;
  }
  .order-btn {
    display: flex;
    justify-content: space-evenly;
  }
  .order-btn > button {
    width: 35%;
    height: 60px;
    border: none;
    background: none;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }
  // .order-btn > button > a {
  //   text-decoration: none;
  //   color: unset;
  // }
  .order-btn > button:first-child {
    color: #f0a500;
    border: 1px solid #f0a500;
    background: #f4f4f4;
    border-radius: 5px;
  }
  .order-btn > button:nth-child(2) {
    color: #f4f4f4;
    border: 1px solid #f4f4f4;
    background: #f0a500;
    border-radius: 5px;
  }
  .order-ad img {
    width: 100%;
    cursor: pointer;
  }
  .cart-modal {
    width: 500px;
    height: 300px;
    background: #f4f4f4;
    border-radius: 20px;
  }
  .cart-modal-head {
    width: 100%;
    height: 15%;
    background: #f0a500;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cart-modal-inner {
    height: 85%;
    justify-content: space-evenly;
  }
  .cart-modal .cart-modal-inner {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cart-modal .cart-modal-inner > div {
    margin: 0;
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

  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1024px) {
    .product-brand {
      font-size: 12px;
    }
    .product-name {
      font-size: 23px;
    }
    .product-price {
      font-size: 27px;
    }
    .product-delivery {
      font-size: 12px;
    }
    .to-store span {
      font-size: 12px;
    }
    .order-sum > div:first-child {
      font-size: 16px;
    }
    .order-sum > div:last-child {
      font-size: 27px;
    }
    .order-btn button {
      font-size: 20px;
    }
    .order-ad {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    .cart-modal {
      width: 100%;
    }
    .cart-modal-head {
    }
    .cart-modal-inner {
      font-size: 22px !important;
      text-align: center;
    }
  }
  @media only screen and (max-width: 425px) {
  }
`;
