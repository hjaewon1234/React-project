import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const CommunityComp = ({ user, getChatData, pushChatData, chatData }) => {
  const [inputText, setInputText] = useState("");
  document.cookie.split(";").map((item) => {
    // console.log(item.split("=")[0]);
  });

  useEffect(() => {
    getChatData();
  }, []);

  return (
    <>
      <div>
        <div>
          {user.userId ? (
            `${user.userId}님 안녕하세요`
          ) : (
            <Link to={"/login"}>로그인 하러가기</Link>
          )}
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                pushChatData({
                  name: user.userId,
                  text: inputText,
                  importance: "S",
                });
              }
            }}
            value={inputText}
          />
        </div>
      </div>

      <div>
        <ul>
          {chatData?.length ? (
            chatData?.map((item, index) => (
              <ListBox key={`list-${index}`} className={item.importance}>
                {item.name} : {item.text}
              </ListBox>
            ))
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
};

export default CommunityComp;

const ListBox = styled.div`
  &.s {
    color: red;
  }
  &.a {
    color: green;
  }
  &.b {
    color: blue;
  }
  &.c {
    color: grey;
  }
  &.d {
    color: white;
  }
`;
