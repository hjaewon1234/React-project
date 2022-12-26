import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const PopupBarComponent = () => {
  const [switcher, setSwitcher] = useState(false);
  return (
    switcher || (
      <PopupBarCompBox>
        <Link to={"/"}>
          <img className="popup-left" src="/img/popupBar/popup1.png" />
        </Link>
        <Link to={"/"}>
          <img className="popup-right" src="/img/popupBar/popup2.png" />
        </Link>
        <img
          onClick={() => setSwitcher((prev) => !prev)}
          src="/img/x-solid.svg"
        />
      </PopupBarCompBox>
    )
  );
};

export default PopupBarComponent;

const PopupBarCompBox = styled.div`
  display: flex;
  width: 100%;

  & > img {
    width: 24px;
    height: 20px;
    margin: 15px 20px 15px;
    position: absolute;
    right: 0;
    object-fit: cover;
    filter: invert(100%) sepia(96%) saturate(0%) hue-rotate(96deg)
      brightness(106%) contrast(104%);
    cursor: pointer;
  }
  a:first-child {
    background-color: rgb(137, 86, 238);
    text-align: right;
  }
  a:nth-child(2) {
    background-color: rgb(0, 187, 255);
    text-align: initial;
  }
  a {
    width: 50%;
    font-size: 0;
  }
  .popup-left {
    margin-right: 65px;
    height: 50px;
  }
  .popup-right {
    margin-left: 65px;
    height: 50px;
  }

  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1024px) {
    margin-right: 70px;
    & > img {
      filter: none;
      margin: 15px 5px 15px 0;
    }
    & a > .popup-left {
      margin-right: 0px;
    }
    & a > .popup-right {
      margin-left: 0px;
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 425px) {
  }
`;
