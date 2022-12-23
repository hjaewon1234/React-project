import { useState } from "react";
import styled from "styled-components";

import MyList from "./MyList";

const UserPageUpperHeader = () => {
  const [clickColor, setClickColor] = useState(0);
  const [myList, setMyList] = useState(0);
  const myShoppingArr = ["주문배송내역 조회", "나의 장바구니", "나의 문의내역"];
  const MyReviewArr = ["리뷰쓰기", "내가 작성한 리뷰"];
  const myOptionArr = ["회원정보수정", "비밀번호 변경"];

  return (
    <div>
      <UserPageHeader>
        <UserPageUpperHeaderDiv>
          <UserPageUpperItem
            onClick={() => {
              setClickColor((state) => (state = 0));
              setMyList((state) => (state = 0));
            }}
            style={{ color: clickColor == 0 ? "#f0a500" : "black" }}
          >
            나의 쇼핑
          </UserPageUpperItem>
          <UserPageUpperItem
            onClick={() => {
              setClickColor((state) => (state = 1));
              setMyList((state) => (state = 0));
            }}
            style={{ color: clickColor == 1 ? "#f0a500" : "black" }}
          >
            나의 리뷰
          </UserPageUpperItem>
          <UserPageUpperItem
            onClick={() => {
              setClickColor((state) => (state = 2));
              setMyList((state) => (state = 0));
            }}
            style={{ color: clickColor == 2 ? "#f0a500" : "black" }}
          >
            설정
          </UserPageUpperItem>
        </UserPageUpperHeaderDiv>

        {clickColor == 0 ? (
          <MyList myarr={myShoppingArr} myList={myList} setMyList={setMyList} />
        ) : (
          <></>
        )}
        {clickColor == 1 ? (
          <MyList myarr={MyReviewArr} myList={myList} setMyList={setMyList} />
        ) : (
          <></>
        )}
        {clickColor == 2 ? (
          <MyList myarr={myOptionArr} myList={myList} setMyList={setMyList} />
        ) : (
          <></>
        )}
      </UserPageHeader>
    </div>
  );
};

export default UserPageUpperHeader;

const UserPageUpperHeaderDiv = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  padding: 10px;
  justify-content: center;
  border-bottom: 1px solid #f0a500;
`;
const UserPageUpperItem = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    color: #f0a500;
  }
`;
const UserPageUnderItem = styled.div`
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #f0a500;
  }
`;
const UserPageUnderHeaderDiv = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  padding: 10px;
  justify-content: center;
`;

const UserPageHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #f0a500;
`;
