import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import UserMainPageContainer from "./userMainPage/UserMainPageContainer";

const UserPage = () => {
  return <UserMainPageContainer />;
};

export default UserPage;

const InfoContainerBox = styled.div`
  background-color: #f4f4f4;
  width: 100%;
  padding: 50px;
`;
