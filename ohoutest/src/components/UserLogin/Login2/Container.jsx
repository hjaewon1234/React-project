import Login2Components from "./Components.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/userInfo.js";
import styled from "styled-components";

const Login2Container = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const curUser = useSelector((state) => state.userInfo);
  const logout = () => {
    axios({
      url: "/logout",
      method: "POST",
      withCredentials: true,
    }).then((result) => {
      if (result.status === 200) {
        // window.open("/", "_self");
        // console.log(result.status);
        // console.log(result.data);
        // setUser(result.data);
        navigate("/", { replace: true });
        dispatch(action.setUser({ userId: "", userName: "" }));
      }
    });
  };

  useEffect(() => {
    console.log(curUser);
    setUser(curUser);
  }, [curUser]);

  // useEffect(() => {
  //   try {
  //     axios({
  //       url: "/check",
  //       method: "GET",
  //       withCredentials: true,
  //     })
  //       .then((result) => {
  //         if (result.data) {
  //           setIsLogin(true);
  //           setUser(result.data);
  //           console.log(result.data);
  //           navigate("/login", { replace: true });
  //           // navigate("/", { replace: true });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <div>
      {isLogin ? (
        <>
          <h3>{user.userName} 님이 로그인했습니다.</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Login2Components
          user={user}
          setUser={setUser}
          setIsLogin={setIsLogin}
        ></Login2Components>
      )}
    </div>
  );
};

export default Login2Container;

// const LoginAfter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 10px;
//   button {
//     position: relative;
//     border: none;
//     display: inline-block;
//     padding: 15px 30px;
//     border-radius: 15px;
//     box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
//     color: #f0a500;
//     text-decoration: none;
//     font-weight: 600;
//     transition: 0.25s;
//     cursor: pointer;
//   }
// `;
