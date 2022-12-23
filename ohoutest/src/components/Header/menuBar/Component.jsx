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
    </MenuBarContainer>
  );
};

export default MenuBarComponent;

const LinkBox = styled.div`
  display: flex;
  gap: 30px;
  flex: 1;
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

  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1024px) {
    flex: 0;
    justify-content: space-between;
    min-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    // min-width: 400px;
    justify-content: space-around;
    flex: 1;
    min-width: 0;
    gap: 0;
  }
  @media only screen and (max-width: 425px) {
    min-width: 300px;
    gap: 10px;
  }
`;

const MenuBarCompBox = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 auto;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  a:hover {
    color: #f0a500;
  }

  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
    a:hover {
      color: initial;
    }
  }
  @media only screen and (max-width: 425px) {
  }
`;

const MenuBarContainer = styled.div`
  background-color: #f4f4f4;
  width: 1200px;
  margin: 0 auto;

  hr {
    border-bottom: none;
    border-top: 1px solid #f0a500;
  }

  @media only screen and (max-width: 1440px) {
    width: 900px;
  }
  @media only screen and (max-width: 1024px) {
    width: 700px;
  }
  @media only screen and (max-width: 768px) {
    // width: 420px;
    width: 100%;
  }
  @media only screen and (max-width: 425px) {
    width: 320px;
  }
`;
