import { useEffect, useState } from "react";
import ChatComponent from "./Component";
import { socket } from "../../service/socket";

const ChatContainer = () => {
  const [chatValue, setChatValue] = useState("");
  const [chatAry, setChatAry] = useState([]);
  const onChatEnter = (e) => {
    if (e.code == "Enter") {
      socket.emit("message", chatValue);
      setChatValue("");
    }
  };
  const onChatting = (e) => {
    setChatValue((state) => state + e.nativeEvent.data);
  };
  useEffect(() => {
    socket.on("upload", (data) => {
      setChatAry((state) => [data, ...state]);
    });
  }, []);

  return (
    <ChatComponent
      onChatEnter={onChatEnter}
      chatValue={chatValue}
      chatAry={chatAry}
      onChatting={onChatting}
    />
  );
};

export default ChatContainer;
