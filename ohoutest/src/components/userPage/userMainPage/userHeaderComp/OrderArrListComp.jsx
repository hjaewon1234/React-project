import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

const OrderArrListComp = ({ productId, createdAt, index }) => {
  const [curProductData, setCurPrductData] = useState({});
  const [curProductImg, setCurProductImg] = useState("");
  const [modalOn, setModalOn] = useState(false);
  const [textValue, setTextValue] = useState("");
  const userInfo = useSelector((state) => state.userInfo);

  const reviewOnClick = () => {
    setModalOn(true);
  };

  const reviewAxios = (userId, productId, text) => {
    axios
      .post("/api/product/reviewProduct", {
        userId: userId,
        productId: productId,
        text: text,
      })
      .then(({ data }) => {});
  };

  useEffect(() => {
    axios
      .post("/api/product/getProductFromId", { productId })
      .then(({ data }) => {
        setCurProductImg(encodeURI(data.img.split(",")[0]));
        setCurPrductData(data);
      });
  }, []);
  return (
    <>
      {modalOn ? (
        <ModalBox>
          <InputBox>
            <div>{curProductData.name}</div>
            <textarea
              onChange={(e) => {
                setTextValue(e.target.value);
              }}
              value={textValue}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  reviewAxios(userInfo.userId, productId, textValue);
                  setTextValue("");
                  setModalOn(false);
                } else if (e.key == "Escape") {
                  setTextValue("");
                  setModalOn(false);
                }
              }}
            ></textarea>
            <div className="btnBox">
              <button
                onClick={() => {
                  reviewAxios(userInfo.userId, productId, textValue);
                  setTextValue("");
                  setModalOn(false);
                }}
              >
                제출하기
              </button>
              <button
                onClick={() => {
                  setTextValue("");
                  setModalOn(false);
                }}
              >
                취소
              </button>
            </div>
          </InputBox>
        </ModalBox>
      ) : (
        <></>
      )}
      <OrderArrListCompBox key={"orderArr-" + index}>
        <div>
          <img src={`/api/download${curProductImg}`} />
        </div>
        <InfoBox>
          <span>{curProductData.name}</span>
          <span>
            구입날짜 :
            {dayjs(new Date(createdAt).toString()).format("YYYY-MM-DD")}
          </span>
        </InfoBox>
        <ReviewBtn
          onClick={() => {
            reviewOnClick();
          }}
        >
          리뷰쓰기
        </ReviewBtn>
      </OrderArrListCompBox>
    </>
  );
};
export default OrderArrListComp;

const OrderArrListCompBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 100px;
  }
  @media only screen and (max-width: 600px) {
    img {
      display: none;
    }
  }
`;

const InfoBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    span {
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 600px) {
    span {
      font-size: 0.6rem;
    }
  }
`;

const ReviewBtn = styled.button`
  width: 10%;
  min-width: 80px;
  margin: 20px 50px;
  font-weight: 600;
  background-color: rgb(240, 165, 0);
  border-radius: 15px;
  color: #f4f4f4;
  border: none;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

const ModalBox = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: #0000004c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  padding-top: 10px;
  border-radius: 15px;
  width: 70%;
  height: 40%;
  background-color: #f4f4f4da;
  textarea {
    font-size: 1.2rem;
    margin-top: 2%;
    padding: 20px;
    width: 70%;
    height: 70%;
    resize: none;
    :focus {
      border: none;
    }
  }
  .btnBox {
    button {
      margin: 0 20px;
      width: 10%;
      height: 50px;
      background-color: #f0a500;
      border: none;
      font-weight: 600;
      :hover {
        color: #f4f4f4da;
      }
    }
  }
`;
