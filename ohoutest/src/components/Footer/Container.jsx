import styled from "styled-components";

import FooterComponent from "./Component";

const FooterContainer = () => {
  return (
    <FooterBox>
      <FooterComponent />
    </FooterBox>
  );
};

export default FooterContainer;

const FooterBox = styled.div`
  width: 1200px;
`;
