import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ChatNoticeComponent from "./ChatNoticeComponet";
const ChatNoticeContainer = () => {
  return <ChatNoticeComponent title={"공지사항 적기"} />;
};

export default ChatNoticeContainer;
