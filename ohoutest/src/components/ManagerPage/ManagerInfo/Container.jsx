import ManagerInfoComponent from "./Component";
import styled from "styled-components";

const ManagerInfoContainer = () => {
  // 필요한게 뭐가 있을까?
  //
  return (
    <InfoContainerBox>
      <ManagerInfoComponent title={"언제다할수잇을까"}></ManagerInfoComponent>
      <ManagerInfoComponent title={"진짜하기싫어"}></ManagerInfoComponent>
      {/* 이미지 넣는법  테스트 */}
      <img src="/api/downloadtreeBall1.jpg"></img>
    </InfoContainerBox>
  );
};

export default ManagerInfoContainer;

const InfoContainerBox = styled.div`
  padding: 50px;
`;
