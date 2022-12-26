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
import ParticleTest from "./components/UserLogin/Particle/Components";

import MyQnaModalContainer from "./components/userPage/userMainPage/userHeaderComp/MyQnaModal/MyQnaModalContainer";
import UserMainPageContainer from "./components/userPage/userMainPage/UserMainPageContainer";
import MyQnaContainer from "./components/userPage/userMainPage/userHeaderComp/MyQnaList/MyQnaListContainer";
import { useEffect, useRef, useState } from "react";
import { socket, SocketContext, SOCKET_EVENT } from "../src/service/socket.js";

axios.defaults.withCredentials = true;

function App() {
  const prevNickname = useRef(null); // prevNickname 변경은 컴포넌트를 리렌더링 하지 않습니다.
  const [nickname, setNickname] = useState("김첨지");

  useEffect(() => {
    if (prevNickname.current) {
      socket.emit(SOCKET_EVENT.UPDATE_NICKNAME, {
        // 서버에는 이전 닉네임과 바뀐 닉네임을 전송해준다.
        prevNickname: prevNickname.current,
        nickname,
      });
    } else {
      socket.emit(SOCKET_EVENT.JOIN_ROOM, { nickname });
    }
  }, [nickname]);

  useEffect(() => {
    socket.emit("message", "hihi");
    socket.on("upload", (data) => {
      console.log(data);
    });
    socket.on("enter", (data) => {
      console.log(data);
    });
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <AppBox>
        {/* <SingUp></SingUp> */}
        <PopupBarContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/signUp" element={<SingUp></SingUp>}></Route>
          <Route path="/managerInfo" element={<ManagerInfo></ManagerInfo>} />
          <Route path="/regist" element={<RegistContainer />} />
          <Route path="/login" element={<Login2Container />} />
          {/* 회원가입 예외처리 하려고  27,28번줄 추가 */}
          <Route path="/search/:sword" element={<SearchContainer />} />
          {/* 회원가입 예외처리 하려고  26번 줄 추가 */}
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
          <Route path="/readmoretest" element={<ReadMore />} />
          <Route path="/userPage" element={<UserPage />} />
          <Route
            path="/userPage/0"
            element={
              <>
                <MyQnaModalContainer />
                <MyQnaContainer />
              </>
            }
          />
        </Routes>
        <Footer />
        <div style={{ backgroundColor: "#1a1c20" }}></div>{" "}
      </AppBox>
    </SocketContext.Provider>
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
