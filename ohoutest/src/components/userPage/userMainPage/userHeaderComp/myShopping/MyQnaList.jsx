import styled from "styled-components";

const MyQnaList = () => {
  return (
    <UserPageInfo>
      <QnaOutterDiv>
        <QnaUpperDiv>여기는 문의 내역 적히는 곳이야</QnaUpperDiv>
      </QnaOutterDiv>
      <ShippingDiv>
        <UnitDiv>
          <div>
            <div>[dsfasdfdsafsdafasd ] [sdfasdfasdfsafasdfdsa]</div>
          </div>
          <div style={{ display: "flex", columnGap: "10px" }}>
            <QnaDiv style={{ backgroundColor: "lightblue" }}></QnaDiv>
          </div>
        </UnitDiv>
      </ShippingDiv>
    </UserPageInfo>
  );
};

export default MyQnaList;

const UserPageInfo = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const QnaUpperDiv = styled.div`
  width: 20%;
  margin: auto;
  font-size: 20px;
  border: 1px solid #f0a500;
  border-radius: 10px;
  column-gap: 100px;
`;
const QnaOutterDiv = styled.div`
  margin-bottom: 20px;
`;
const UnitDiv = styled.div`
  padding: 10px 0;

  display: flex;
`;
const ShippingDiv = styled.div`
  width: 50%;
  margin: auto;
  justify-content: center;
  border: 1px solid #f0a500;
  border-radius: 10px;
  display: flex;
  column-gap: 100px;
`;
const QnaDiv = styled.div`
  border: 1px solid black;
  padding: 3px;
  border-radius: 7px;
  font-weight: bold;
  background-color: black;
`;
