import { useState } from "react";
import ManagerInfo from "./components/ManagerPage";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Container";
import SingUp from "./components/index";
import PopupBarContainer from "./components/popupBar/Container";

function App() {
  const [switcher, setSwitcher] = useState(false);
  return (
    <AppBox>
      {/* <SingUp></SingUp> */}
      {switcher || <PopupBarContainer setSwitcher={setSwitcher} />}
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

export default App;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f4f4f4;
  height: 3000px;
`;
