import ManagerInfoComponent from "./Component";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../../modules/productManage";

const ManagerInfoContainer = () => {
  // 필요한게 뭐가 있을까?
  const dispatch = useDispatch();
  const ProductInfo = useSelector((state) => state.productManageInfo);
  const ProductManageInfo = () => dispatch(action.setProduct);
  console.log(ProductInfo);
  console.log(ProductManageInfo());

  return (
    <InfoContainerBox>
      {/* 이미지 넣는법  테스트 */}
      <img src="/api/downloadtreeBall1.jpg"></img>
      <ManagerInfoComponent title={"언제다할수잇을까"} />
      <ManagerInfoComponent title={"진짜하기싫어"} />
      <button onClick={() => dispatch(action.setProduct)}>그럼말고</button>
    </InfoContainerBox>
  );
};

export default ManagerInfoContainer;

const InfoContainerBox = styled.div`
  padding: 50px;
`;
