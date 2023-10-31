import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ChatNoticeComponent from "./ChatNoticeComponet";
import { action } from "../../../../modules/chatNoticeManager";

const ChatNoticeContainer = () => {
  const dispatch = useDispatch();
  const chatNotice = useSelector((state) => state.chatNoticeManager);
  const noticeChager = (text) => dispatch(action.setChatNoticeManager(text));

  return (
    <ChatNoticeComponent
      title={"채팅 공지 사항"}
      noticeChager={noticeChager}
      chatNotice={chatNotice}
    />
  );
};

export default ChatNoticeContainer;
