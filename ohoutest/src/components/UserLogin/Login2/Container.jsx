import Login2Components from "./Components.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login2Container = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

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
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Login2Components
          user={user}
          setUser={setUser}
          setIsLogin={setIsLogin}
        ></Login2Components>
      )}
    </>
  );
};

export default Login2Container;
