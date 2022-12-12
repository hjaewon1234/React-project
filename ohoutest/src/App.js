import ManagerInfo from "./components/ManagerPage";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Container";

function App() {
  return (
    <AppBox>
      <SingUp></SingUp>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
      <Footer />
      <div style={{ backgroundColor: "#1a1c20" }}>
        {/* <ManagerInfo></ManagerInfo> */}
      </div>
    </AppBox>
  );
}

import SingUp from "./components/index";

export default App;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f4f4f4;
  height: 3000px;
`;
