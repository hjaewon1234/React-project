import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
let tempArr = [1, 2, 3, 4, 5];
// 여기도 추후에 숫자를 어떻게 받을 지 생각을 하고
// 숫자를 눌럿을 때 임시 랜더링으로 파일을 다시 불러오면 될 것 같음.

const ManagerInfoComponent = ({ title, tempThunk }) => {
  const [accodion, setAccodion] = useState(true);
  const [color, setColor] = useState(1);
  const productInfo = useSelector((state) => state.productManageInfo);
  console.log(productInfo.length);
  console.log(productInfo);

  return (
    <Infodiv>
      <div>
        <UpperAcco onClick={() => setAccodion(!accodion)}>
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>{title}</div>
          <div style={{ paddingRight: "3%" }}>
            <img
              src="./arrow-up-solid.svg"
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
                {item.img ? (
                  item?.img?.split(",").map((innerItem) => {
                    console.log(innerItem);
                    console.log(encodeURI(innerItem) + "이건 인코드된거임");
                    console.log(decodeURI(innerItem) + "이건 디코드된거임");
                    return <img src={`/api/download${decodeURI(innerItem)}`} />;
                  })
                ) : (
                  <></>
                )}

                {/* {item.img.split(",").map((imgSplit) => (
                  <img src={`/api/download${imgSplit}.jpg`} />
                ))} */}
                {/* <img
                  src={`/api/download${decodeURI(item.img.split(",")[0])}.jpg`}
                  width={"70px"}
                /> */}
                <div>
                  <div>
                    [ {item.brand} ] [사은품 증정] {item.name}
                  </div>
                </div>
                <div style={{ display: "flex", columnGap: "10px" }}>
                  <ShippingDiv>배송 중</ShippingDiv>
                  {/* 여기에는 배송중 // 배송완료로 나눠서 하면 될것 같음. 
                      createdAt이랑 현재 시간이랑 비교를 한 후 나누면 될 것 같음. 현재 시간을 알 수 있는게 
                      new Date */}
                </div>
              </UnitDiv>
            ))}
          </AccoContents>

          <PagingDiv>
            {tempArr.map((item, index) => (
              <NumberBox
                key={index}
                onClick={() => tempThunk(index)}
                style={{
                  backgroundColor: color - 1 == item ? "#f0a500" : "#f4f4f4",
                }}
              >
                {item}
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
