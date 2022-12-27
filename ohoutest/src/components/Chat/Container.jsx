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
  useEffect(() => {
    socket.on("upload", (data) => {
      setChatAry((state) => [...state, data]);
    });
  }, []);

  return (
    <ChatComponent
      onChatEnter={onChatEnter}
      chatValue={chatValue}
      setChatValue={setChatValue}
      chatAry={chatAry}
      setChatAry={setChatAry}
    />
  );
};

export default ChatContainer;
