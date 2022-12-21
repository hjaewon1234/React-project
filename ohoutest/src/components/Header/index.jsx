import styled from "styled-components";
import { useRef } from "react";

import NavBarContainer from "./navBar/Container";
import MenuBarContainer from "./menuBar/Container";

const Header = () => {
  const fixedRef = useRef();

  return (
    <HeaderBox>
      <div className="fixed-container" ref={fixedRef}>
        <NavBarContainer />
        <hr />
        <MenuBarContainer />
        <hr />
      </div>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.div`
  width: 100%;
  position: sticky;
  z-index: 100;
  left: 0px;
  right: 0px;
  top: 0px;

  hr {
    border-bottom: none;
    border-top: 1px solid #f0a500;
  }
  .fixed-container {
    background-color: #f4f4f4;
    margin: 0 auto;
    position: relative;
  }
`;
