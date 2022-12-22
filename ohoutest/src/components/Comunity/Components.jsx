import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const CommunityComp = ({ user, getChatData, pushChatData, chatData }) => {
  const [inputText, setInputText] = useState("");
  const [entered, setEntered] = useState(true);
  document.cookie.split(";").map((item) => {
    // console.log(item.split("=")[0]);
  });

  const [importance, setImportance] = useState("s");

  useEffect(() => {
    getChatData();
  }, []);

  useEffect(() => {
    const magicNum = Math.floor(Math.random() * 5);
    switch (magicNum) {
      case 4:
        setImportance("s");
        break;
      case 3:
        setImportance("a");
        break;
      case 2:
        setImportance("b");
        break;
      case 1:
        setImportance("c");
        break;
      case 0:
        setImportance("d");
        break;
      default:
        setImportance("s");
        break;
    }
  }, [entered]);

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
                  importance: importance,
                });
                setEntered((state) => !state);
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
