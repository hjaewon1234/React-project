import styled from "styled-components";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QnaComponent = ({
  title,
  qnaInfo,
  qnaPaging,
  tempQnaInfoThunk,
  color,
  setColor,
}) => {
  const [accodion, setAccodion] = useState(true);

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
          <AccoContents>
            {qnaInfo.map((item, index) => {
              return (
                <UnitDiv key={index}>
                  <div className="img">
                    <img
                      src={`/api/download${item.Product.img.split(",")[0]}`}
                      style={{ width: "70px" }}
                    />
                  </div>
                  <div>
                    <div>
                      <span className="brand"> [{item.Product.brand}]</span>{" "}
                      {item.Product.name.split("(")[0]}
                    </div>
                  </div>
                  <div style={{ display: "flex", columnGap: "10px" }}>
                    <ShippingDiv>
                      <Link
                        to={`/managerInfo/qnaAnswer/${index}`}
                        style={{ color: "black" }}
                      >
                        리뷰 확인
                      </Link>
                    </ShippingDiv>
                  </div>
                </UnitDiv>
              );
            })}
          </AccoContents>

          <PagingDiv>
            {qnaPaging.map((item, index) => (
              <NumberBox
                key={index}
                onClick={() => {
                  tempQnaInfoThunk(index);
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

export default QnaComponent;

const Infodiv = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  text-align: center;
  & > div {
    margin: auto;
    width: 70%;
    background-color: #f0a500;
    border-radius: 10px;
  }
`;
const PagingDiv = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
  padding-bottom: 10px;
`;

const InfoContentDiv = styled.div`
  background-color: #f4f4f4;
  border-radius: 0 0 10px 10px;
  font-weight: bold;
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
  @media (max-width: 1280px) {
    img {
      width: 50px;
    }
    font-size: 0.8rem;
  }
  @media (max-width: 1024px) {
    .img {
      display: none;
    }
    img {
      display: none;
    }
  }
  @media (max-width: 920px) {
    font-size: 0.6rem;
  }
  @media (max-width: 770px) {
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
`;
const ShippingDiv = styled.div`
  border: 1px solid black;
  padding: 3px;
  border-radius: 7px;
  font-weight: bold;
  background-color: skyblue;
  & a {
    text-decoration: none;
    color: #f4f4f4;
  }
  @media (max-width: 682px) {
    display: none;
  }
`;
const QnaDiv = styled.div`
  border: 1px solid black;
  padding: 3px;
  border-radius: 7px;
  font-weight: bold;
  background: black;

  & a {
    text-decoration: none;
    color: #f4f4f4;
  }
`;
