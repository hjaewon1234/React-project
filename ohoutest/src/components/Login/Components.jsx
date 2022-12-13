import { useState } from "react";
// import { useDispatch } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
const LoginComponents = ({ setIsLogin, setUser }) => {
  const [inputId, setId] = useState("");
  const [inputPw, setPw] = useState("");
  const dispatch = useDispatch();
  // const logHandle = () => {
  //   dispatch(
  //     signUpUser({
  //       inputId,
  //       inputPw,
  //     })
  //   );
  // };

  const Login = () => {
    axios({
      url: "http://localhost:8080/login",
      method: "POST",
      withCredentials: true,
      data: {
        userId: inputId,
        userPw: inputPw,
      },
    }).then((result) => {
      if (result.status === 200) {
        window.open("/", "_self");
      }
    });
  };

  return (
    <div>
      <label> 아이디</label>
      <input
        type={"text"}
        value={inputId}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder={"아이디"}
      />
      <label> 비밀번호</label>
      <input
        type={"password"}
        value={inputPw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder={"비밀번호"}
      />
      <button onClick={Login} className="loginButton">
        로그인
      </button>
    </div>
  );
};

export default LoginComponents;

const RegistTopStlye = styled.div``;
const RegistMidStlye = styled.div``;
const AcceptStlye = styled.div``;
