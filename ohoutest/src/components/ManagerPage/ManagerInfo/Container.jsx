import ManagerInfoComponent from "./unitCompnents/ManagerInfoComponent";
import QnaComponent from "./unitCompnents/QnaComponent";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import AnswerQna from "./unitCompnents/AnswerQna";
import { useEffect } from "react";
import { productManageThunk } from "../../../modules/productManage";
import { productPagingThunk } from "../../../modules/productPaging";

const ManagerInfoContainer = () => {
  const dispatch = useDispatch();
  const tempThunk = (num) => dispatch(productManageThunk(num));
  const tempPagingThunk = () => dispatch(productPagingThunk());
  useEffect(() => {
    tempThunk(0);
    tempPagingThunk();
  }, []);
  const productInfo = useSelector((state) => state.productManageInfo);
  const productPaging = useSelector((state) => state.productPaging);
  return (
    <InfoContainerBox>
      <Routes>
        <Route path="/managerInfo/qnaAnswer/:id" element={<AnswerQna />} />
        {/* id에 맞춰서 AnserQna에 줄 값 설정
            id에 따라서 줄 값 은 배열로 뽑아온 것의 index가 될것이다. 
            페이징을 햇을때 문제가 생길까? -> 어차피 뽑아온것에 index 0~9 이기 때문에
            무방할 것 같음.
            AnswerQna가 받을 값은 해주는거.. db를 새로 만들어야하나?
            db를 새로 만든다면.. 테이블을 어떻게 해줘야할까..?
            관계형이 아니라면 필요한 정보가 userId // 해당 상품 // 문의 내용
            // 답변내용 // 답변 상태 // c 가 될 것 같음. 
            관계형으로 해야한다면.. 상품 -- 문의사항 -- 유저 이런식으로 나올것 같은데
            내가 이해한 관계형은 두개의 table 사이에서 새로 값을 뽑아낼 때 사용한다고 생각을 해서
            유저 - 문의내용 => 관계를 지음
            상품 + 유저 + 유저의 문의내용
            m:n인가 그럼...? -- 상의해볼내용

            테이블명.belongsToMany(상대테이블명, {through :"미들테이블명"})
            상대테이블명.belongsToMany(테이블명, {through :"미들테이블명"})
            여기선 through속성은 필수
            미들테이블명에 서로 동등한 자격의 외래키가 생긴다.

            테이블명.belongsToMany(상대테이블명, {as: "새로운 이름의 테이블명", through :"미들테이블명", foreignKey : "테이블명Id"})
            상대테이블명.belongsToMany(테이블명, {as: "새로운 이름의 테이블명", through :"미들테이블명", foreignKey : "상대테이블명Id"})
            위 2줄코드와 아래 1줄 코드는 같다
            테이블명.belongsToMany(상대테이블명, {as: "새로운 이름의 테이블명", through :"미들테이블명", foreignKey : "테이블명Id", otherKey: '상대테이블명'})
            
            상품 - Qna - user
            n  n  n 
            n:n -> 부정확한 표현
            mysql에서 관계 테이블 표 찍어봣을때 m:n
            n:m => belonsToMany
            
            */}
      </Routes>
      <img src={`http://localhost:8080/api/downloadtreeBall1.jpg`}></img>

      <ManagerInfoComponent
        title={"상품 배송 정보"}
        tempThunk={tempThunk}
        productInfo={productInfo}
        productPaging={productPaging}
      />
      <QnaComponent title={"문의 사항 확인"} productInfo={productInfo} />
      <ManagerInfoComponent
        title={"상품 추가"}
        tempThunk={tempThunk}
        productInfo={productInfo}
        productPaging={productPaging}
      />
    </InfoContainerBox>
  );
};

export default ManagerInfoContainer;

const InfoContainerBox = styled.div`
  background-color: #1a1c20;
  width: 100%;
  padding: 50px;
`;
