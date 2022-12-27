import Login2Components from "./Components.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/userInfo.js";
import swal from "sweetalert";
import styled from "styled-components";
// import ModalContainer from "../Modal/Container.jsx";

const Login2Container = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const curUser = useSelector((state) => state.userInfo);

  // 쿠키로만 할껄면 굳이 우리가 이거를 할필요가 없다.
  // 그냥 상태로도 내가 로그인 한 상태를 알 수 잇고/ 그것에 대한 정보를 담아줄수있고
  // 굳이 쿠키 써야댐? (자동 로그인 할때는 쿠키가 있어야되네)
  // 새로고침을 해도 괜찮냐
  // 리엑트 특성?? 그래서 일부러 새로고침을 안하고 상태 변화를 인식하면

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
      } else if (result.status === 402) {
        swal({
          title: "사용가능한 닉네임입니다.",
          showCancelButton: true,
          confirmButtonColor: "#F0A500",
          confirmButtonText: "확인",
        });
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
    <>
      <div>
        {isLogin ? (
          <>
            <h3>{user.userName} 님이 로그인했습니다.</h3>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Login2Components
            // user={user}
            setUser={setUser}
            setIsLogin={setIsLogin}
          ></Login2Components>
        )}
      </div>
    </>
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
