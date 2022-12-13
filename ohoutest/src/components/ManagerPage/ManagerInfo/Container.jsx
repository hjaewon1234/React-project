import ManagerInfoComponent from "./unitCompnents/ManagerInfoComponent";
import QnaComponent from "./unitCompnents/QnaComponent";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import AnswerQna from "./unitCompnents/AnswerQna";
import { productManageThunk } from "../../../modules/productManage";

const ManagerInfoContainer = () => {
  // 필요한게 뭐가 있을까?
  const dispatch = useDispatch();
  const tempThunk = (num) => dispatch(productManageThunk(num));
  tempThunk(0);
  // const ProductInfo = useSelector((state) => state.productManageInfo);

  // 계속 불러오는게 문제임

  return (
    <InfoContainerBox>
      {/* 이미지 넣는법  테스트 */}

      <Routes>
        <Route path="/qnaAnswer/:id" element={<AnswerQna />} />
      </Routes>
      <img src="/api/downloadtreeBall2.jpg"></img>

      <ManagerInfoComponent title={"상품 배송 정보"} tempThunk={tempThunk} />
      <QnaComponent title={"문의 사항 확인"} />
      <ManagerInfoComponent title={"상품 추가"} />
      <button onClick={() => dispatch(productManageThunk())}>애플 최고</button>
      <button>윈도우 쌉구림ㅋ</button>
    </InfoContainerBox>
  );
};

// 지금 상황으로 봤을 때 추가가 된것이 확인이 되는것 같음.

export default ManagerInfoContainer;

const InfoContainerBox = styled.div`
  padding: 50px;
`;
