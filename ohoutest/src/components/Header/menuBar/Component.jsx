import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import RankingContainer from "./ranking/Container";

const MenuBarComponent = () => {
  const menuBarRef = useRef();
  let prevScroll = 0;
  let currentScroll = 0;
  let isDown;
  const scrollEvent = () => {
    currentScroll = window.scrollY;
    currentScroll > prevScroll ? (isDown = true) : (isDown = false);
    if (isDown) {
      console.log("내림");
    } else {
      console.log("올림");
    }
    prevScroll = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <MenuBarContainer>
      <MenuBarCompBox ref={menuBarRef}>
        <LinkBox>
          <Link to={"/"}>스토어홈</Link>
          <Link to={"/"}>카테고리</Link>
          <Link to={"/"}>베스트</Link>
          <Link to={"/"}>오늘의딜</Link>
        </LinkBox>
        <RankingContainer />
      </MenuBarCompBox>
      <hr />
    </MenuBarContainer>
  );
};

export default MenuBarComponent;

const LinkBox = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  a:hover {
    color: #f0a500;
  }
`;

const MenuBarCompBox = styled.div`
  display: flex;
  gap: 30px;
  width: 1200px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  a:hover {
    color: #f0a500;
  }
`;

const MenuBarContainer = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  hr {
    border-bottom: none;
    border-top: 1px solid #f0a500;
  }
`;
