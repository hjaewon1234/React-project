import Login2Components from "./Components.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const Login2Container = () => {
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

  console.log(user.userName);
  console.log(user.username);
  console.log(user.inputName);

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
    <>
      <a onClick={accessToken}></a>
      <a onClick={refreshToken}></a>
      <h3>{user.username} 111님이 로그인했습니다.</h3>
      <button onClick={logout}>Logout</button>
      <Login2Components
        setUser={setUser}
        setIsLogin={setIsLogin}
      ></Login2Components>
    </>
  );
};

export default Login2Container;
