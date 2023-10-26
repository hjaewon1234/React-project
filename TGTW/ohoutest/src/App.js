import ManagerInfo from "./components/ManagerPage";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Container";
import SingUp from "./components/index";
import AnswerQnaContainer from "./components/ManagerPage/ManagerInfo/answerQna/AnswerQnaContainer";

import PopupBarContainer from "./components/PopupBar/Container";
import axios from "axios";
import RegistContainer from "./components/UserLogin/Regist/Container";
import Login2Container from "./components/UserLogin/Login2/Container";
import SearchContainer from "./components/Search/Container";
import CartContainer from "./components/Cart/Container";
import CommunityContainer from "./components/Comunity/Container";
import ReadMore from "./components/ReadMore";
import UserPage from "./components/userPage";
import UserMainPageComponent from "./components/userPage/userMainPage/UserMainPageComponent";
import ChatContainer from "./components/Chat/Container";
axios.defaults.withCredentials = true;

function App() {
  return (
    <AppBox>
      <PopupBarContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/signUp" element={<SingUp></SingUp>}></Route>
        <Route path="/managerInfo" element={<ManagerInfo></ManagerInfo>} />
        <Route path="/regist1" element={<RegistContainer />} />
        <Route path="/login1" element={<Login2Container />} />
        <Route path="/search/:sword" element={<SearchContainer />} />
        <Route
          path="/managerInfo/qnaAnswer/:id"
          element={
            <>
              <ManagerInfo />
              <AnswerQnaContainer />
            </>
          }
        />
        <Route path="/cart" element={<CartContainer />}></Route>
        <Route path="/community" element={<CommunityContainer />} />
        <Route
          path="/:userId/userPage/myShopping"
          element={<UserMainPageComponent />}
        />
        <Route path="/readmore/:productId" element={<ReadMore />} />
        <Route path="/userPage" element={<UserPage />} />
      </Routes>
      <ChatContainer />
      <Footer />
      <div style={{ backgroundColor: "#1a1c20" }}></div>{" "}
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f4f4f4;
`;
