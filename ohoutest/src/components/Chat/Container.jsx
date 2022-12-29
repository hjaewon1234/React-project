import { useEffect, useState } from "react";
import ChatComponent from "./Component";
import { socket } from "../../service/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";
import { SOCKET_EVENT } from "../../service/socket";

const ChatContainer = () => {
  const [chatValue, setChatValue] = useState("");
  const [chatAry, setChatAry] = useState([]);
  const [world, setWorld] = useState("whole");
  const userInfo = useSelector((state) => state.userInfo);
  const noticeInfo = useSelector((state) => state.chatNoticeManager);

  const userName = userInfo.userName;
  const vipNum = userInfo.userImportance;
  let uploadFunc;

  const onChatEnter = async (e) => {
    // if (chatValue == "" || userName == "") return;
    if (e.code == "Enter") {
      console.log(world);
      await axios.post("/api/community/pushChat", {
        name: userName,
        text: chatValue,
        room: world,
        importance: vipNum,
      });
      socket.emit("message", {
        name: userName,
        text: chatValue,
        room: world,
        importance: vipNum,
      });
      setChatValue("");
    }
  };
  const chatLog = async (worldName) => {
    const result = await axios.post("/api/community/getChat", {
      room: worldName,
    });
    console.log(result.data);
    setChatAry(result.data);
  };
  // async 함수로 선언된 함수는 결과가 나올때 await가 없으면 그냥 프로미스로 나온다.
  // return 값이 나오지 않는다.
  // chatAry = chatLog();
  // [useruserName, chatValue]
  const onChatting = (e) => {
    setChatValue((state) => state + e.nativeEvent.data);
  };
  useEffect(() => {
    uploadFunc = (data) => {
      console.log(data);
      if (data.room == world) {
        console.log(data);
        setChatAry((state) => [data, ...state]);
      }
    };
    socket.emit("ROOM");
    socket.on("upload", uploadFunc);
  }, []);

  useEffect(() => {
    chatLog(world);
    console.log("한번돔", world);
    socket.off("upload", uploadFunc);
    uploadFunc = (data) => {
      console.log(data);
      if (data.room == world) {
        console.log(data);
        setChatAry((state) => [data, ...state]);
      }
    };
    socket.on("upload", uploadFunc);
  }, [world]);

  return (
    <ChatComponent
      onChatEnter={onChatEnter}
      chatValue={chatValue}
      chatAry={chatAry}
      onChatting={onChatting}
      userName={userName}
      setWorld={setWorld}
      noticeInfo={noticeInfo}
      setChatValue={setChatValue}
    />
  );
};

export default ChatContainer;
