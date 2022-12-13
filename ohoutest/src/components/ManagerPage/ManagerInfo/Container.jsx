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
  }, []);
  // tempPagingThunk();
  const productInfo = useSelector((state) => state.productManageInfo);
  const productPaging = useSelector((state) => state.productPaging);
  console.log(productPaging);
  console.log(productInfo);
  return (
    <InfoContainerBox>
      <Routes>
        <Route path="/qnaAnswer/:id" element={<AnswerQna />} />
      </Routes>
      <img src="/api/downloadtreeBall2.jpg"></img>

      <ManagerInfoComponent
        title={"상품 배송 정보"}
        tempThunk={tempThunk}
        productInfo={productInfo}
      />
      <QnaComponent title={"문의 사항 확인"} productInfo={productInfo} />
      <ManagerInfoComponent
        title={"상품 추가"}
        tempThunk={tempThunk}
        productInfo={productInfo}
      />
      <button onClick={() => dispatch(productManageThunk())}>애플 최고</button>
      <button>윈도우 쌉구림ㅋ</button>
    </InfoContainerBox>
  );
};

export default ManagerInfoContainer;

const InfoContainerBox = styled.div`
  padding: 50px;
`;
