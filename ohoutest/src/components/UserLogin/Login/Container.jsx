import LoginComponents from "../Login/Components";
import axios from "axios";
import { useEffect, useState } from "react";

const LoginContainer = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const accessToken = () => {
    axios({
      url: "http://localhost:8080/accesstoken",
      method: "GET",
      withCredentials: true,
    });
  };

  const refreshToken = () => {
    axios({
      url: "http://localhost:8080/refreshtoken",
      method: "GET",
      withCredentials: true,
    });
  };

  const logout = () => {
    axios({
      url: "http://localhost:8080/logout",
      method: "POST",
      withCredentials: true,
    }).then((result) => {
      if (result.status === 200) {
        window.open("/", "_self");
      }
    });
  };

  useEffect(() => {
    try {
      axios({
        url: "http://localhost:8080/login/success",
        method: "GET",
        withCredentials: true,
      })
        .then((result) => {
          if (result.data) {
            setIsLogin(true);
            setUser(result.data);
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
    <header>
      <a onClick={accessToken}></a>
      <a onClick={refreshToken}></a>
      {isLogin ? (
        <>
          <h3>{user.username} 님이 로그인했습니다.</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <LoginComponents setUser={setUser} setIsLogin={setIsLogin} />
      )}
    </header>
  );
};

export default LoginContainer;
