import styled from "styled-components";

import NavBarContainer from "./navBar/Container";
import MenuBarContainer from "./menuBar/Container";

const Header = () => {
  return (
    <HeaderBox>
      <hr />
      <NavBarContainer />
      <hr />
      <MenuBarContainer />
      <hr />
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  width: 100%;
  hr {
    border-bottom: none;
  }
`;
