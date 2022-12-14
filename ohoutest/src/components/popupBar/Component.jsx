import styled from "styled-components";
import { Link } from "react-router-dom";

const PopupBarComponent = ({ setSwitcher }) => {
  return (
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
    top: 0;
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
`;
