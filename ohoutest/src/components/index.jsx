import LoginContainer from "./UserLogin/Login/Container";
import Login2Container from "./UserLogin/Login2/Container";
import RegistContainer from "./UserLogin/Regist/Container";
import MainContainer from "./UserLogin/Main/Container";
import { Link } from "react-router-dom";

const SingUp = ({ userName }) => {
  return (
    <>
      <div>{userName ? <></> : <></>}</div>
      {userName ? <MainContainer /> : <></>}
      <Login2Container></Login2Container>
    </>
  );
};

export default SingUp;
