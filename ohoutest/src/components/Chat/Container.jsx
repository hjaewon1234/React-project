import { useEffect, useState } from "react";
import ChatComponent from "./Component";
import { socket } from "../../service/socket";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { SOCKET_EVENT } from "../../service/socket";

const ChatContainer = () => {
  const [chatValue, setChatValue] = useState("");
  const [chatAry, setChatAry] = useState([]);
  const [world, setWorld] = useState("whole");
  const userInfo = useSelector((state) => state.userInfo);
  const userName = userInfo.userName;
  const onChatEnter = (e) => {
    if (e.code == "Enter") {
      socket.emit("message", { userName: userName, chatValue: chatValue });
      setChatValue("");
    }
  };

  // [useruserName, chatValue]
  const onChatting = (e) => {
    setChatValue((state) => state + e.nativeEvent.data);
  };
  useEffect(() => {
    socket.on("upload", (data) => {
      setChatAry((state) => [data, ...state]);
    });
  }, []);
  useEffect(() => {
    socket.emit("ROOM", world);
    console.log("한번돔", world);
  }, [world]);

  return (
    <ChatComponent
      onChatEnter={onChatEnter}
      chatValue={chatValue}
      chatAry={chatAry}
      onChatting={onChatting}
      userName={userName}
      setWorld={setWorld}
    />
  );
};

export default ChatContainer;
