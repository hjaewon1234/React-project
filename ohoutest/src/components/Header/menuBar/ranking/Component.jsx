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
`;
