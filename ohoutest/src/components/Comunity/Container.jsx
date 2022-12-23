import CommunityComp from "./Components";
import ResponsiveComp from "../util/ResponsiveComp";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

const CommunityContainer = () => {
  const user = useSelector((state) => state.userInfo);
  const [chatData, setChatData] = useState("");
  const getChatData = () => {
    axios.post("/api/community/getChat").then(({ data }) => {
      setChatData(data);
      return data;
    });
  };
  const pushChatData = ({ name, text, importance }) => {
    axios
      .post("/api/community/pushChat", {
        name: name,
        text: text,
        importance: importance,
      })
      .then(({ data }) => {
        return getChatData();
      });
  };
  return ResponsiveComp(
    <CommunityComp
      user={user}
      getChatData={getChatData}
      pushChatData={({ name, text, importance }) =>
        pushChatData({ name, text, importance })
      }
      chatData={chatData}
    />
  );
};

export default CommunityContainer;
