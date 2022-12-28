import styled from "styled-components";

import { useState } from "react";

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
            {productInfo.map((item, index) => (
              <UnitDiv key={index}>
                <img
                  src={`/api/download${decodeURI(item.img)}`}
                  style={{ width: "70px" }}
                />

                <div>
                  <div>
                    [ {item.brand} ] {item.name}
                  </div>
                </div>
                <div style={{ display: "flex", columnGap: "10px" }}>
                  <ShippingDiv>배송 중</ShippingDiv>
                </div>
              </UnitDiv>
            ))}
          </AccoContents>

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
  padding: 10px 0;
  border-bottom: 1px solid black;
  & > div:first-child > div {
    overflow: hidden;
    tex-overflow: ellipsis;
    white-space: nowrap;
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
  background-color: #f0a500;
`;
