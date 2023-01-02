import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const MyQnaList = () => {
  const num = 0;
  const userId = useSelector((state) => state.userInfo);
  const userRealId = userId.userId;
  return (
    <UserPageInfo>
      <QnaOutterDiv>
        <QnaUpperDiv>나의 문의 내역</QnaUpperDiv>
      </QnaOutterDiv>
      <ShippingDiv>
        <UnitDiv>
          <div>
            <AccoContents>
              <UnitDiv>
                <div>
                  <div>[브랜드명] 내가 구매한 상품</div>
                </div>
                <div>
                  <QnaDiv>답변 상태</QnaDiv>
                </div>
                <QnaGoDiv>
                  <Link to={`/${userRealId}/userPage/myShopping/:${num}`}>
                    답변에 대한걸 확인하기
                  </Link>
                </QnaGoDiv>
              </UnitDiv>
            </AccoContents>
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
`;

const QnaGoDiv = styled.div`
  border: 1px solid black;
  padding: 3px;
  border-radius: 7px;
  font-weight: bold;
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
