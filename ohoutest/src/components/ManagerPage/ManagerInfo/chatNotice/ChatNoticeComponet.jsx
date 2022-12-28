import styled from "styled-components";
import { useState } from "react";
import CommunityContainer from "../../../Comunity/Container";

const ChatNoticeComponent = ({ title }) => {
  const [accodion, setAccodion] = useState(0);
  return (
    <Infodiv>
      <div>
        <UpperAcco onClick={() => setAccodion(!accodion)}>
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>{title}</div>
          <div style={{ paddingRight: "3%" }}>
            <img
              src="/arrow-up-solid.svg"
              style={{
                width: "22px",
                rotate: accodion ? "180deg" : "0deg",
              }}
            />
          </div>
        </UpperAcco>
        <InfoContentDiv
          style={{
            display: accodion ? "none" : "block",
          }}
        >
          <AccoContents></AccoContents>
        </InfoContentDiv>
      </div>
    </Infodiv>
  );
};

export default ChatNoticeComponent;

const Infodiv = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  text-align: center;
  & > div {
    margin: auto;
    width: 70%;
    background-color: #f0a500;
    border-radius: 10px;
  }
`;

const InfoContentDiv = styled.div`
  background-color: #f4f4f4;
  border-radius: 0 0 10px 10px;
`;

const AccoContents = styled.div`
  padding: 10px;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    row-gap: 20px;
  }
  & > form > div {
    display: flex;
    width: 85%;
    column-gap: 10px;
    margin: auto;
    align-item: center;
    > div > input {
      width: 350px;
    }
  }
  & > form > div > select {
    margin-right: 20px;
    width: 150px;
    height: 25px;
  }

  & > form > div > button {
    border: 1px solid black;
    padding: 3px;
    border-radius: 7px;
    font-weight: bold;
  }
`;

const UpperAcco = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 3%;
  cursor: pointer;
`;
