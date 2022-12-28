import { useState } from "react";
import styled from "styled-components";

const ChatComponent = ({
  onChatEnter,
  chatValue,
  chatAry,
  onChatting,
  setWorld,
}) => {
  const [inputRangeValue, setInputRangeValue] = useState(50);
  const [viewChat, setViewChatBox] = useState(false);
  const [serverColor, setServerColor] = useState(0);

  return (
    <>
      <ViewBox
        onClick={() => {
          setViewChatBox((state) => !state);
        }}
        view={viewChat}
      >
        채팅창 열기
        <img src="/arrow-up-solid.svg" alt="" />
      </ViewBox>
      <ChatBox opacity={inputRangeValue / 100} view={viewChat}>
        <ChattingBox opacity={inputRangeValue / 100}>
          <WorldSelectBox opacity={inputRangeValue / 100}>
            <WorldDiv
              onClick={() => {
                setServerColor((state) => (state = 0));
                setWorld("whole");
              }}
              style={{
                backgroundColor:
                  serverColor == 0
                    ? "rgb(200, 200, 200)"
                    : `rgba(20,22,36,${inputRangeValue / 100})`,
                color: serverColor == 0 ? "black" : "white",
              }}
            >
              전체
            </WorldDiv>
            <WorldDiv
              onClick={() => {
                setServerColor((state) => (state = 1));
                setWorld("world1");
              }}
              style={{
                backgroundColor:
                  serverColor == 1
                    ? "rgb(200, 200, 200)"
                    : `rgba(20,22,36,${inputRangeValue / 100})`,
                color: serverColor == 1 ? "black" : "white",
              }}
            >
              World1
            </WorldDiv>
            <WorldDiv
              onClick={() => {
                setServerColor((state) => (state = 2));
                setWorld("world2");
              }}
              style={{
                backgroundColor:
                  serverColor == 2
                    ? "rgb(200, 200, 200)"
                    : `rgba(20,22,36,${inputRangeValue / 100})`,
                color: serverColor == 2 ? "black" : "white",
              }}
            >
              World2
            </WorldDiv>
            <WorldDiv
              onClick={() => {
                setServerColor((state) => (state = 3));
                setWorld("world3");
              }}
              style={{
                backgroundColor:
                  serverColor == 3
                    ? "rgb(200, 200, 200)"
                    : `rgba(20,22,36,${inputRangeValue / 100})`,
                color: serverColor == 3 ? "black" : "white",
              }}
            >
              World3
            </WorldDiv>
          </WorldSelectBox>
          <ViewChatBox>
            {chatAry.map((item, index) => {
              return (
                <div
                  key={`chatAry-${index}`}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div key={`chat-${index}`}>{item.userName}</div>
                  <div key={`chatValue-${index}`}>{item.chatValue}</div>
                </div>
              );
            })}
          </ViewChatBox>
          <SliderBox opacity={inputRangeValue / 100}>
            <button
              onClick={() => {
                setViewChatBox((state) => !state);
              }}
            >
              X
            </button>
            <input
              type="range"
              value={inputRangeValue}
              onChange={(e) => {
                setInputRangeValue(e.target.value);
              }}
              orient={"vertical"}
            />
          </SliderBox>
        </ChattingBox>
        <InputBox opacity={inputRangeValue / 100}>
          <input
            onKeyDown={(e) => {
              onChatEnter(e);
            }}
            onChange={(e) => {
              onChatting(e);
            }}
            value={chatValue}
          />
        </InputBox>
      </ChatBox>
    </>
  );
};

export default ChatComponent;

const ChatBox = styled.div`
  background-color: rgba(26, 28, 32, ${(props) => props.opacity});
  color: rgba(
    200,
    200,
    200,
    ${(props) => (props.opacity == 0 ? props.opacity : 1)}
  );
  position: fixed;
  right: 0;
  bottom: 0;
  width: 800px;
  height: 300px;
  z-index: 10;
  display: ${(props) => (props.view ? "block" : "none")};
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const SliderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  padding-top: 1%;
  row-gap: 5%;
  width: 10%;
  height: 100%;
  align-items: center;
  border-left: solid 1px rgba(200, 200, 200, 0.5);
  input[type="range"][orient="vertical"] {
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* Chromium */
    width: 50%;
    height: 80%;
    padding: 0 5px;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    cursor: pointer;
    background: rgba(200, 200, 200, 0.8);
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border-radius: 0;
  }
  input[type="range"]::-webkit-slider-thumb {
    background: rgba(200, 200, 200, 0.5);
  }
  button {
    width: 20px;
    height: 20px;
    background-color: rgba(26, 28, 32, ${(props) => props.opacity});
  }
  button:hover {
    background-color: rgb(200, 200, 200);
  }
`;

const ChattingBox = styled.div`
  background-color: rgba(26, 28, 32, ${(props) => props.opacity});
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
`;

const WorldSelectBox = styled.div`
  width: 80px;
  height: 100%;
  background-color: rgba(26, 28, 32, ${(props) => props.opacity});
  display: flex;
  flex-direction: column;
  row-gap: 1%;
  cursor: pointer;
`;

const InputBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;

  input {
    font-size: 1.2rem;
    padding-right: 1%;
    color: rgba(
      200,
      200,
      200,
      ${(props) => (props.opacity == 0 ? props.opacity : 1)}
    );
    background-color: rgba(100, 100, 100, ${(props) => props.opacity});
    width: 100%;
    height: 100%;
    text-align: right;
    border: ${(props) => (props.opacity == 0 ? "none" : `1px solid grey`)};
  }
`;

const ViewBox = styled.div`
  padding: 10px 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding-bottom: 30px;
  color: white;
  z-index: 10;
  font-weight: 600;
  position: fixed;
  right: 50px;
  bottom: 0;
  display: ${(props) => (props.view ? "none" : "block")};
  background-color: #525252;
  z-index: 10;
  img {
    filter: brightness(0) invert(1);
    width: 10px;
  }
  &:hover {
    cursor: pointer;
    background-color: #302e2e;
  }
`;

const ViewChatBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: end;
  overflow-y: scroll;
  & > div {
    border-top: 1px solid rgb(200, 200, 200, 0.3);
    padding: 5px 0px;
    padding-right: 20px;
    text-align: right;
  }
`;

const WorldDiv = styled.div`
  font-weight: 600;
  background-color: rgba(20, 22, 36, ${(props) => props.opacity});
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24%;
  &:hover {
    background-color: rgb(200, 200, 200);
    color: black;
  }
`;
