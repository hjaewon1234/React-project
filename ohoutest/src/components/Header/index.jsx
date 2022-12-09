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
  width: 1200px;
  hr {
    width: 100vw;
    margin-left: calc(-1 * ((100vw - 1200px) / 2));
  }
`;
