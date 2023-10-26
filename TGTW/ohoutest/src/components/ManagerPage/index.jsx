import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import ManagerInfoContainer from "./ManagerInfo/managerInfo/ManagerInfoContainer";
import AnswerQna from "./ManagerInfo/answerQna/AnswerQnaComponent";
import QnaContainer from "./ManagerInfo/qnaInfo/QnaContainer";
import FileAddContainer from "./ManagerInfo/FileAdd/FileAddContainer";
import ChatNoticeContainer from "./ManagerInfo/chatNotice/ChatNoticeContainer";

const ManagerInfo = () => {
  return (
    <InfoContainerBox>
      <Routes>
        <Route path="/managerInfo/qnaAnswer/:id" element={<AnswerQna />} />
      </Routes>

      <ManagerInfoContainer />
      <QnaContainer />
      <FileAddContainer />
      <ChatNoticeContainer />
    </InfoContainerBox>
  );
};

export default ManagerInfo;

const InfoContainerBox = styled.div`
  background-color: #1a1c20;
  width: 100%;
  padding: 50px;
  & > div {
    margin-top: 60px;
  }
  @media (max-width: 400px) {
    padding: 50px 0px;
    min-width: 300px;
  }
`;
