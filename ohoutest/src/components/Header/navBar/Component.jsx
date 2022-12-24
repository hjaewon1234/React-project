import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ParticleTest from "../../UserLogin/Particle/Components";

import { action } from "../../../modules/userInfo.js";

import DropDown from "./DropDown";

const NavBarComponent = ({ onSubmit, isOnline }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const loginedMenu = ["마이페이지", "로그아웃"];
  const dropDownRef = useRef();
  const imgRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {}, [isOpen]);

  const logOutFunc = () => {
    axios({
      url: "/logout",
      method: "POST",
      withCredentials: true,
    }).then((result) => {
      if (result.status === 200) {
        navigate("/", { replace: true });
        dispatch(action.setUser({ userId: "", userName: "" }));
      }
    });
  };

  return (
    <NavBarCompBox isOnline={isOnline}>
      <div className="nav-bar-container">
        <Link to="/main" className="logo-icon">
          <img src="/img/TeamLogo.png" />
        </Link>
        <Link className="mobile-s-store" to="/readmoretest">
          스토어
        </Link>
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
              setIsOpen={setIsOpen}
              imgRef={imgRef}
              logOutFunc={logOutFunc}
            />
          )}
        </div>

        {isOnline || <Link to="/login">로그인</Link>}
        {isOnline || <Link to="/regist">회원가입</Link>}
        {isOnline && (
          <Link className="mobile-s" to="/">
            마이페이지
          </Link>
        )}
        {isOnline && (
          <Link className="mobile-s" onClick={logOutFunc}>
            로그아웃
          </Link>
        )}
        <Link className="mobile-s" to="/">
          장바구니
        </Link>
        <Link to="/">고객센터</Link>
        <hr className="mobile-s-hr" />
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
    color: initial;
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
  .cart-icon {
    font-size: 0;
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
    display: ${(props) => {
      if (props.isOnline) return "block";
      else return "none";
    }};
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
  .mobile-s {
    display: none;
  }

  @media only screen and (max-width: 1440px) {
    .nav-bar-container {
      width: 900px;
    }
    .login-pic .drop-item {
      font-size: 22px;
      letter-spacing: 4px;
      border-radius: 5px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .nav-bar-container {
      width: 700px;
    }
    .logo-icon img {
      width: 100px;
    }
    a {
      font-size: 14px;
    }
    span > img {
      vertical-align: bottom;
    }
    input {
      width: 200px;
      height: 30px;
      font-size: 16px;
      line-height: 30px;
    }
    .login-pic .drop-item {
      font-size: 20px;
      letter-spacing: 3px;
      border-radius: 3px;
    }
    .login-pic .drop-container {
      width: 250px;
      left: -105px;
      top: 62px;
    }
    .login-pic img {
      width: 35px;
      height: 35px;
    }
    .login-pic {
      width: 35px;
      height: 35px;
    }
    .cart-icon img {
      width: 30px;
      height: 30px;
    }
  }
  @media only screen and (max-width: 768px) {
    height: 110px;
    .nav-bar-container {
      width: 100%;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .logo-icon img {
      width: 120px;
    }
    input {
      width: 90%;
    }
    .logo-icon {
      order: -5;
      min-width: 43%;
      margin-top: 5px;
    }
    .search-box {
      order: -3;
      min-width: 40%;
      margin-top: 5px;
      margin-right: 3%;
      margin-left: 3%;
    }
    .search-box span {
      display: none;
    }
    .login-pic .drop-container {
      width: 200px;
      left: -80px;
    }
    .login-pic {
      display: none;
    }
    .cart-icon {
      display: none;
    }
    .mobile-s {
      display: block;
    }
    a:hover {
      color: initial;
    }
    a {
      font-size: 12px;
    }
    .mobile-s-hr {
      display: initial;
      width: 100%;
      order: -1;
    }
  }
  @media only screen and (max-width: 425px) {
    .logo-icon {
      width: 50%;
    }
    .logo-icon img {
    }
    .search-box {
      width: calc(50% - 6%);
      margin-bottom: 5px;
    }
    .nav-bar-container {
      justify-content: center;
    }
    a:not(.logo-icon) {
      margin-left: 2%;
    }
    .mobile-s-store {
      margin-left: 0;
    }
  }
`;
