import styled from "styled-components";
import { DropdownComp } from "./dropdown/Component";

const RankingComponent = () => {
  return (
    <RankingCompBox>
      <DropdownComp />
    </RankingCompBox>
  );
};

export default RankingComponent;

const RankingCompBox = styled.div`
  position: relative;
  user-select: none;
  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 425px) {
  }
`;
