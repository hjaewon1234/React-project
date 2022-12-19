import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import DropDown from "./DropDown";

const NavBarComponent = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState("");
  const loginedMenu = ["마이페이지", "로그아웃"];
  const dropDownRef = useRef();
  const imgRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {}, [isOpen]);

  // return (
  //   <NavBarCompBox>
  //     <div className="nav-bar-container">
  //       <Link to="/main" className="logo-icon">
  //         <img src="/img/TeamLogo.png" />
  //       </Link>
  //       <Link to="/">스토어</Link>
  //       <Link to="/community">커뮤니티</Link>
  //       <div className="search-box">
  //         <span className="magnify-icon">
  //           <img src="/img/magnifying-glass-solid.svg" />
  //         </span>
  //         <input
  //           id="searchInput"
  //           placeholder="통합검색"
  //           onChange={(e) => {
  //             setSearchInput(() => e.target.value);
  //           }}
  //           onKeyDown={(e) => {
  //             if (e.key == "Enter") {
  //               onSubmit(searchInput);
  //               setSearchInput(() => "");
  //             }
  //           }}
  //           value={searchInput}
  //         />
  //         {/* {!searchInput || (
  //         <span className="x-btn">
  //                     <img src="/img/x-solid.svg" />
  //         </span>
  //       )} */}
  //         <span className="x-btn">
  //           <img src="/img/x-solid.svg" />
  //         </span>
  //       </div>
  //       <Link to="/" className="cart-icon">
  //         <img src="/img/cart-shopping-solid.svg" />
  //       </Link>
  //       <Link to="/login">로그인</Link>
  //       <Link to="/signUp">회원가입</Link>
  //       <Link to="/">고객센터</Link>
  //       <button className="upload-btn">
  //         글쓰기
  //         <img src="/img/chevron-right-solid.svg" />
  //       </button>
  //     </div>
  //   </NavBarCompBox>
  // );

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
          <span className="x-btn">
            {searchInput && (
              <img
                onClick={() => {
                  setSearchInput("");
                }}
                src="/img/x-solid.svg"
              />
            )}
          </span>
        </div>
        <Link to="/cart" className="cart-icon">
          <img src="/img/cart-shopping-solid.svg" />
        </Link>
        <div className="login-pic">
          <img
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            src="/img/loginDefault.jpeg"
            ref={imgRef}
          />
          {isOpen && (
            <DropDown
              arr={loginedMenu}
              refs={dropDownRef}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              imgRef={imgRef}
            />
          )}
        </div>
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
    width: 280px;
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
    position: relative;
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
  .x-btn {
    position: absolute;
    right: 5px;
  }
  .x-btn img {
    cursor: pointer;
    width: 20px;
    height: 20px;
    user-select: none;
  }
  .x-btn img:hover {
    filter: invert(73%) sepia(19%) saturate(6189%) hue-rotate(3deg)
      brightness(96%) contrast(104%);
  }
  .cart-icon img {
    width: 35px;
    height: 35px;
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
  .login-pic {
    width: 50px;
    height: 50px;
    position: relative;
  }
  .login-pic img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    cursor: pointer;
  }
  .login-pic img:hover {
    transform: scale(1.2);
    padding: 4px;
    background-color: #f0a500;
  }
  .login-pic .drop-container {
    width: 350px;
    // / 2 - 25
    position: absolute;
    z-index: 4;
    top: 70px;
    left: -150px;
    border-radius: 10px;
    padding: 5px;
    border: 2px solid #cf7500;
  }
  .login-pic .drop-item {
    font-size: 24px;
    letter-spacing: 5px;
    padding: 5px;
    cursor: pointer;
    user-select: none;
    border-radius: 5px;
    margin: 8px 5px;
  }
  .login-pic .drop-ul {
  }
  .login-pic .drop-item:hover {
    background-color: #f0a500;
  }
`;
