import LoginContainer from "./Login/Container";
import RegistContainer from "./Regist/Container";
import MainContainer from "./Main/Container";
import { Routes, Route, Link } from "react-router-dom";

const SingUp = ({ userName }) => {
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        {userName ? (
          <></>
        ) : (
          <>
            | <Link to={"/regist"}>회원가입</Link> |
            <Link to={"/login"}>로그인</Link>
          </>
        )}
      </div>
      {userName ? <MainContainer /> : <></>}
      <Routes>
        <Route path="/regist" element={<RegistContainer />} />
        <Route path="/" element={<LoginContainer />} />
      </Routes>
    </>
  );
};

export default SingUp;
