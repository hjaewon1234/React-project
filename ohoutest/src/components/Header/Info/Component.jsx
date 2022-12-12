import styled from "styled-components";
import { useSelector } from "react-redux";

const InfoComponent = ({ onClick, getUserOnClick }) => {
  return (
    <InfoBox>
      {useSelector((state) => {
        return state.userInfo.id
          ? `id : ${state.userInfo.id}`
          : "id : 아직 몰라";
      })}
      <button
        onClick={() => {
          onClick();
        }}
      >
        userInfo
      </button>
      <button
        onClick={() => {
          getUserOnClick();
        }}
      >
        getUserInfo
      </button>
      <img src="/api/downloadtreeBall1.jpg" />
    </InfoBox>
  );
};

export default InfoComponent;

const InfoBox = styled.div``;
