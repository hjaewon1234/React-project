import Login2Container from "./UserLogin/Login2/Container";
import MainContainer from "./UserLogin/Main/Container";

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
