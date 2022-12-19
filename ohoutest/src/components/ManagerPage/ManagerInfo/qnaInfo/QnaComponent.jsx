import styled from "styled-components";

import { useState } from "react";
import { Link } from "react-router-dom";

const QnaComponent = ({ title, qnaInfo, qnaPaging, tempQnaInfoThunk }) => {
  const [accodion, setAccodion] = useState(true);
  const [color, setColor] = useState(0);

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
                  <div>
                    <div>
                      [ {item.User.userId} ] [{item.Product.brand}]{" "}
                      {item.Product.name}
                    </div>
                  </div>
                  <div style={{ display: "flex", columnGap: "10px" }}>
                    {item.qnaState ? (
                      <QnaDiv style={{ backgroundColor: "lightblue" }}>
                        <Link
                          to={`/managerInfo/qnaAnswer/${index}`}
                          style={{ color: "black" }}
                        >
                          답변수정
                        </Link>
                      </QnaDiv>
                    ) : (
                      <QnaDiv>
                        <Link to={`/managerInfo/qnaAnswer/${index}`}>
                          답변하기
                        </Link>
                      </QnaDiv>
                    )}
                    {item.qnaState ? (
                      <ShippingDiv style={{ backgroundColor: "green" }}>
                        답변 완료
                      </ShippingDiv>
                    ) : (
                      <ShippingDiv>답변 대기</ShippingDiv>
                    )}
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
`;

const NumberBox = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  width: 20px;
  cursor: pointer;
`;
const AccoContents = styled.div`
  padding: 10px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
  }
`;
const UnitDiv = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid black;
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
  background-color: #f0a500;
`;
const QnaDiv = styled.div`
  border: 1px solid black;
  padding: 3px;
  border-radius: 7px;
  font-weight: bold;
  background-color: black;

  & a {
    text-decoration: none;
    color: #f4f4f4;
  }
`;
