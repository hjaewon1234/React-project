import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Container";

function App() {
  return (
    <AppBox>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
      <Footer />
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
