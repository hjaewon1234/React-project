import styled from "styled-components";

import NavBarContainer from "./navBar/Container";
import MenuBarContainer from "./menuBar/Container";
import PopupBarContainer from "./popupBar/Container";

const Header = () => {
  return (
    <HeaderBox>
      <PopupBarContainer />
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
