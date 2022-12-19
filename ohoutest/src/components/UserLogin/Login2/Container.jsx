import Login2Components from "./Components.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login2Container = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // 쿠키로만 할껄면 굳이 우리가 이거를 할필요가 없다.
  // 그냥 상태로도 내가 로그인 한 상태를 알 수 잇고/ 그것에 대한 정보를 담아줄수있고
  // 굳이 쿠키 써야댐? (자동 로그인 할때는 쿠키가 있어야되네)
  // 새로고침을 해도 괜찮냐
  // 리엑트 특성?? 그래서 일부러 새로고침을 안하고 상태 변화를 인식하면

  const logout = () => {
    axios({
      url: "http://localhost:8080/logout",
      method: "POST",
      withCredentials: true,
    }).then((result) => {
      if (result.status === 200) {
        // window.open("/", "_self");
        navigate("/", { replace: true });
      }
    });
  };

  useEffect(() => {
    try {
      axios({
        url: "http://localhost:8080/check",
        method: "GET",
        withCredentials: true,
      })
        .then((result) => {
          if (result.data) {
            setIsLogin(true);
            setUser(result.data);
            console.log(result.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {isLogin ? (
        <>
          <h3>{user.userName} 님이 로그인했습니다.</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Login2Components
          setUser={setUser}
          setIsLogin={setIsLogin}
        ></Login2Components>
      )}
    </>
  );
};

export default Login2Container;
