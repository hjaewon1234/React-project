import styled from "styled-components";

import { useState } from "react";
import dayjs from "dayjs";
// 여기도 추후에 숫자를 어떻게 받을 지 생각을 하고
// 숫자를 눌럿을 때 임시 랜더링으로 파일을 다시 불러오면 될 것 같음.

const ManagerInfoComponent = ({
  title,
  tempThunk,
  productInfo,
  productPaging,
}) => {
  const [accodion, setAccodion] = useState(true);
  const [color, setColor] = useState(0);

  const myProductInfoBox = () => {
    try {
      return productInfo.map((item, index) => {
        const itemTime = dayjs(new Date(item.createdAt).toString()).format(
          "YYYY-MM-DD"
        );
        const nowTime = dayjs(new Date(Date.now()).toString()).format(
          "YYYY-MM-DD"
        );
        const shippingStatus = nowTime.split("-")[2] - itemTime.split("-")[2];
        return (
          <UnitDiv key={index}>
            <img
              src={`/api/download${decodeURI(item.Product.img.split(",")[0])}`}
            />

            <div>
              <div className="textBox">
                <span>
                  <span className="brand">[ {item.Product.brand} ]</span>{" "}
                  {item.Product.name}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", columnGap: "10px" }}>
              {shippingStatus == 0 ? (
                <ShippingDiv>배송준비</ShippingDiv>
              ) : (
                <></>
              )}
              {shippingStatus == 1 ? (
                <ShippingDiv style={{ backgroundColor: "skyblue" }}>
                  배송 중
                </ShippingDiv>
              ) : (
                <></>
              )}
              {shippingStatus == 2 ? (
                <ShippingDiv style={{ backgroundColor: "lightgreen" }}>
                  배송 완료
                </ShippingDiv>
              ) : (
                <></>
              )}
            </div>
          </UnitDiv>
        );
      });
    } catch (error) {
      return <div></div>;
    }
  };

  return (
    <Infodiv>
      <div>
        <UpperAcco onClick={() => setAccodion(!accodion)}>
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>{title}</div>
          <div style={{ paddingRight: "3%" }}>
            <img
              src="/arrow-up-solid.svg"
              style={{
                width: "22px",
                rotate: accodion ? "180deg" : "0deg",
              }}
            />
          </div>
        </UpperAcco>
        <InfoContentDiv
          style={{
            display: accodion ? "none" : "block",
          }}
        >
          <AccoContents>{myProductInfoBox()}</AccoContents>

          <PagingDiv>
            {productPaging.map((item, index) => (
              <NumberBox
                key={index}
                onClick={() => {
                  tempThunk(index);
                  setColor(index);
                }}
                style={{
                  backgroundColor: color == index ? "#f0a500" : "#f4f4f4",
                }}
              >
                {item + 1}
              </NumberBox>
            ))}
          </PagingDiv>
        </InfoContentDiv>
      </div>
    </Infodiv>
  );
};

export default ManagerInfoComponent;

const Infodiv = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  text-align: center;
  & > div {
    overflow-x: hidden;
    margin: auto;
    width: 70%;
    background-color: #f0a500;
    border-radius: 10px;
  }
`;

const InfoContentDiv = styled.div`
  background-color: #f4f4f4;
  border-radius: 0 0 10px 10px;
  font-weight: bold;
`;
const PagingDiv = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
  padding-bottom: 10px;
  min-width: 200px;
`;
const NumberBox = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  width: 20px;
  cursor: pointer;
`;
const AccoContents = styled.div`
  padding: 10px;
  white-space: nowrap;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
  }
`;
const UnitDiv = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid black;
  & > div:first-child > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  img {
    width: 70px;
  }
  @media (max-width: 1280px) {
    img {
      width: 50px;
    }
    font-size: 0.8rem;
  }
  @media (max-width: 1024px) {
    img {
      display: none;
    }
  }
  @media (max-width: 920px) {
    font-size: 0.6rem;
  }
  @media (max-width: 738px) {
    .brand {
      display: none;
    }
    .textBox {
      width: 100%;
      overflow-x: hidden;
    }
  }
`;
const UpperAcco = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 3%;
  cursor: pointer;
  min-width: 200px;
`;
const ShippingDiv = styled.div`
  border: 1px solid black;
  padding: 3px;
  border-radius: 7px;
  font-weight: bold;
  background-color: #f0a500;
  @media (max-width: 682px) {
    display: none;
  }
`;
