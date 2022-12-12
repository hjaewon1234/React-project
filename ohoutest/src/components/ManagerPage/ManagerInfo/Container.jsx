import ManagerInfoComponent from "./Component";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { action, productManageThunk } from "../../../modules/productManage";

const ManagerInfoContainer = () => {
  // 필요한게 뭐가 있을까?
  const dispatch = useDispatch();

  const ProductInfo = useSelector((state) => state.productManageInfo);
  console.log(ProductInfo);

  return (
    <InfoContainerBox>
      {/* 이미지 넣는법  테스트 */}
      <img src="/api/downloadtreeBall1.jpg"></img>

      <ManagerInfoComponent
        title={"상품 배송 정보"}
        info={ProductInfo.payload}
      />
      <ManagerInfoComponent title={"문의 사항 확인"} />
      <ManagerInfoComponent title={"상품 추가"} />
      <button onClick={() => dispatch(productManageThunk())}>그럼말고</button>
      <button onClick={() => console.log(ProductInfo)}>확인해보기</button>
    </InfoContainerBox>
  );
};

// 지금 상황으로 봤을 때 추가가 된것이 확인이 되는것 같음.

export default ManagerInfoContainer;

const InfoContainerBox = styled.div`
  padding: 50px;
`;
