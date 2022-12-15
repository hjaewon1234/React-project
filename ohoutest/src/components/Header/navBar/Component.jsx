import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const NavBarComponent = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <NavBarCompBox>
      <div className="nav-bar-container">
        <Link to="/main" className="logo-icon">
          <img src="/img/TeamLogo.png" />
        </Link>
        <Link to="/">스토어</Link>
        <Link to="/community">커뮤니티</Link>
        <div className="search-box">
          <span className="magnify-icon">
            <img src="/img/magnifying-glass-solid.svg" />
          </span>
          <input
            id="searchInput"
            placeholder="통합검색"
            onChange={(e) => {
              setSearchInput(() => e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                onSubmit(searchInput);
                setSearchInput(() => "");
              }
            }}
            value={searchInput}
          />
          {/* {!searchInput || (
          <span className="x-btn">
            <img src="/img/circle-xmark-regular.svg" />
          </span>
        )} */}
          <span className="x-btn">
            <img src="/img/circle-xmark-regular.svg" />
          </span>
        </div>
        <Link to="/" className="cart-icon">
          <img src="/img/cart-shopping-solid.svg" />
        </Link>
        <Link to="/login">로그인</Link>
        <Link to="/signUp">회원가입</Link>
        <Link to="/">고객센터</Link>
        <button className="upload-btn">
          글쓰기
          <img src="/img/chevron-right-solid.svg" />
        </button>
      </div>
    </NavBarCompBox>
  );
};

export default NavBarComponent;
const NavBarCompBox = styled.div`
  height: 90px;
  display: flex;
  .nav-bar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  a:hover {
    color: #f0a500;
  }
  input {
    width: 240px;
    height: 40px;
    border: none;
    font-size: 18px;
    line-height: 40px;
    background-color: inherit;
  }
  input:focus {
    outline: none;
  }
  a:first-child {
    font-size: 0;
  }
  .logo-icon img {
    width: 140px;
  }
  span > img {
    width: 20px;
    vertical-align: top;
    margin: 0px 10px 0px 5px;
  }
  .search-box {
    border: 2px solid grey;
    border-radius: 5px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-box:hover {
    background-color: #e6e6e6;
  }
  .magnify-icon img {
    filter: invert(48%) sepia(8%) saturate(0%) hue-rotate(160deg)
      brightness(103%) contrast(86%);
  }
  .x-btn img {
    cursor: pointer;
  }
  .x-btn img:hover {
    filter: invert(73%) sepia(19%) saturate(6189%) hue-rotate(3deg)
      brightness(96%) contrast(104%);
  }
  .cart-icon img {
    width: 28px;
  }
  .cart-icon img:hover {
    filter: invert(73%) sepia(19%) saturate(6189%) hue-rotate(3deg)
      brightness(96%) contrast(104%);
  }
  .upload-btn {
    font-size: inherit;
    font-weight: bold;
    border: none;
    background-color: #f0a500;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    color: #f4f4f4;
  }
  .upload-btn:hover {
    background-color: #cf7500;
  }
  .upload-btn img {
    width: 12px;
    transform: rotate(90deg);
    vertical-align: text-top;
    margin-left: 5px;
    filter: invert(100%) sepia(37%) saturate(64%) hue-rotate(185deg)
      brightness(116%) contrast(91%);
  }
`;
