import styled from "styled-components";

const ShippingStatus = ({ listClick }) => {
  return (
    <UserPageInfo>
      {listClick == 0 ? (
        <ShippingUnderDiv>
          <ShippingUnderItem>여기는 </ShippingUnderItem>
          <ShippingUnderItem>배송중인</ShippingUnderItem>
          <ShippingUnderItem>상품이</ShippingUnderItem>
          <ShippingUnderItem>차지할 공간</ShippingUnderItem>
        </ShippingUnderDiv>
      ) : (
        <></>
      )}
      {listClick == 1 ? (
        <ShippingUnderDiv>
          <ShippingUnderItem>여기는 </ShippingUnderItem>
          <ShippingUnderItem>배송준비</ShippingUnderItem>
          <ShippingUnderItem>상품이</ShippingUnderItem>
          <ShippingUnderItem>차지할 공간</ShippingUnderItem>
        </ShippingUnderDiv>
      ) : (
        <></>
      )}
      {listClick == 2 ? (
        <ShippingUnderDiv>
          <ShippingUnderItem>여기는 </ShippingUnderItem>
          <ShippingUnderItem>배송완료</ShippingUnderItem>
          <ShippingUnderItem>상품이</ShippingUnderItem>
          <ShippingUnderItem>차지할 공간</ShippingUnderItem>
        </ShippingUnderDiv>
      ) : (
        <></>
      )}
    </UserPageInfo>
  );
};

export default ShippingStatus;

const ShippingUnderDiv = styled.div`
  width: 50%;
  margin: auto;
  border: 1px solid #f0a500;
  border-radius: 10px;
`;
const ShippingUnderItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin: 15px;
`;
const UserPageInfo = styled.div`
  width: 100%;
  padding-top: 20px;
`;
