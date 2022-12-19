import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import ManagerInfoContainer from "./ManagerInfo/managerInfo/ManagerInfoContainer";
import AnswerQna from "./ManagerInfo/answerQna/AnswerQnaComponent";
import QnaContainer from "./ManagerInfo/qnaInfo/QnaContainer";
import FileAddContainer from "./ManagerInfo/FileAdd/FileAddContainer";

const ManagerInfo = () => {
  return (
    <InfoContainerBox>
      <Routes>
        <Route path="/managerInfo/qnaAnswer/:id" element={<AnswerQna />} />
      </Routes>
      <ManagerInfoContainer />;
      <QnaContainer />;
      <FileAddContainer />
    </InfoContainerBox>
  );
};

export default ManagerInfo;

const InfoContainerBox = styled.div`
  background-color: #1a1c20;
  width: 100%;
  padding: 50px;
`;
