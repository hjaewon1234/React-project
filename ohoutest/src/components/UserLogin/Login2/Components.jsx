import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action } from "../../../modules/userInfo";
import { Link } from "react-router-dom";
import ParticleTest from "../Particle/Components";
import { ParticleTest1 } from "../Particle/Components";
import swal from "sweetalert";
const Login2Components = ({ setIsLogin, setUser, user }) => {
  const [inputId, setId] = useState("");
  const [inputPw, setPw] = useState("");
  // const [inputName, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const loginHandler = () => {
  //   dispatch(
  //     logInUser({
  //       inputId,
  //       inputName,
  //     })
  //   );
  // };
  const logInHandle = () => {
    console.log(inputId, inputPw);
    axios({
      url: "/login",
      method: "POST",
      withCredentials: true,
      // client와 server가 쿠키 값을 공유
      data: {
        inputId: inputId,
        inputPw: inputPw,
      },
    }).then((result) => {
      if (result.status === 200) {
        console.log("로그인 성공");
        // window.open("/signUp", "_self");
        // navigate("/", { replace: true });
        navigate("/", { replace: true });
        if (result.data?.userId)
          dispatch(
            action.setUser({
              userId: result.data.userId,
              userName: result.data.userName,
            })
          );
      } else if (result.status === 402) {
        swal({
          title: "중복되는 아이디가 있습니다. 다른 아이디를 사용하세요",
          showCancelButton: true,
          confirmButtonColor: "#F0A500",
          confirmButtonText: "확인",
        });
      }
    });
  };

  return (
    <>
      <RegistMain>
        <RegistTopStlye>
          <h3>로그인</h3>
        </RegistTopStlye>
        <RegistMidStlye>
          <label> 아이디</label>
          <input
            type={"text"}
            value={inputId}
            onInput={(e) => {
              setId(e.target.value);
            }}
            placeholder={"로그인"}
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
          <button
            onClick={() => {
              logInHandle();
            }}
            // onChange={loginHandler}
            disabled={
              inputId.length <= 99 && inputPw.length <= 8 ? true : false
            }
          >
            로그인
          </button>{" "}
          <RegistLink>
            <Link
              // to={"/regist"}
              style={{ textDecoration: "none" }}
            >
              <div
                onClick={() => {
                  window.open("/regist", "_self");
                }}
              >
                아직 회원가입을 안하셨나요?{" "}
              </div>
            </Link>
          </RegistLink>
        </RegistMidStlye>
        <ParticleStyle>
          <ParticleStyle1 className="Particle1 Particle2">
            <ParticleTest></ParticleTest>
          </ParticleStyle1>
          <ParticleStyle2 className="Particle1 Particle3">
            <ParticleTest1></ParticleTest1>
          </ParticleStyle2>
        </ParticleStyle>
      </RegistMain>
    </>
  );
};
export default Login2Components;

const ParticleStyle = styled.div`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  top: -900px;
  right: 400px;
  width: 100vh;

  .Particle2 {
    z-index: 2;
    display: block;
    top: 335px;
    left: 1100px;
    animation-direction: reverse;
    animation: effect1 5.7s infinite alternate ease-in-out;
  }
  .Particle3 {
    display: block;
    top: 355px;
    left: 790px;
    animation-direction: reverse;
    animation: effect2 5.7s infinite alternate ease-in-out;
  }
  @keyframes effect1 {
    from {
      top: 55px;
      left: 500px;
      transform: rotate(270deg);
    }
    to {
      left: 1100px;

      transform: rotate(70deg);
    }
  }
  @keyframes effect2 {
    from {
      top: 50px;
      right: 290px;
      transform: rotate(70deg);
    }
    to {
      right: 820px;
      transform: rotate(280deg);
    }
  }
  @media screen and (max-width: 768px) {
    .Particle1 {
      display: none;
    }
    .Particle2 {
      display: block;
      top: 455px;
      left: 650px;
      animation-direction: alternate;
      animation: effect1 6.3s infinite alternate ease-in-out;
    }
    .Particle3 {
      display: block;
      z-index: 1;
      top: 355px;
      right: 220px;
      animation-direction: reverse;
      animation: effect2 5.7s infinite alternate ease-in-out;
    }
    @keyframes effect1 {
      from {
        top: 50px;
        left: 650px;

        transform: rotate(45deg);
      }
      to {
        top: -350px;
        left: 600px;

        transform: rotate(210deg);
      }
    }
    @keyframes effect2 {
      from {
        top: 50px;
        right: 220px;
        transform: rotate(70deg);
      }
      to {
        right: 760px;
        transform: rotate(280deg);
      }
    }
  }
`;
const ParticleStyle1 = styled.div`
  flex: 1;
  position: absolute;
  z-index: 1;
  top: 455px;
  left: 380px;
`;
const ParticleStyle2 = styled.div`
  flex: 1;
  position: absolute;
  z-index: 1;
  top: 325px;
  left: 770px;
`;

const BoxShadow = styled.div`
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

const RegistMain = styled.div`
  margin-top: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 53vh;
  button {
    margin-top: 15px;
    background-color: rgb(240, 165, 0);
    outline: none;
    border: 0;
    width: 350px;
    height: 45px;
    font-size: 18px;
    font-weight: bold;
    color: rgb(244, 244, 244);
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    transition: 0.4s ease-in-out;
    &:disabled {
      transition: 0.8s ease-in-out;
      background-color: rgb(216, 217, 207);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
    }
  }
  @media screen and (min-width: 1280px) {
    height: 71vh;
  }
  @media screen and (max-width: 1280px) {
    height: 65vh;
  }
  @media screen and (max-width: 1024px) {
    height: 78vh;
  }
  @media screen and (max-width: 912px) {
    height: 42vh;
  }
  @media screen and (max-width: 820px) {
    height: 51vh;
  }
  @media screen and (max-width: 768px) {
    height: 55vh;
    margin-bottom: 55px;
  }
  @media screen and (max-width: 540px) {
    height: 92vh;
    scale: 0.9;
  }
  @media screen and (max-width: 414px) {
    height: 51.5vh;
    scale: 0.9;
  }
  @media screen and (max-width: 412px) {
    margin-bottom: 55px;
    height: 45vh;
    scale: 0.8;
  }
  @media screen and (max-width: 393px) {
    height: 51vh;
    scale: 0.85;
  }
  @media screen and (max-width: 375px) {
    height: 55vh;
    scale: 0.8;
  }
  @media screen and (max-width: 360px) {
    height: 65vh;
    scale: 0.8;
  }
  @media screen and (max-width: 280px) {
    height: 43vh;
    scale: 0.55;
  }
`;
const RegistTopStlye = styled.div`
  z-index: 5;
  border-bottom: 1px solid rgb(244, 244, 244);
  margin-bottom: 20px;
  width: 350px;
`;
const RegistMidStlye = styled.div`
  * {
    margin-bottom: 15px;
  }
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  label {
    align-self: flex-start;
    margin-bottom: 0px;
    padding: 10px;
    padding-left: 0px;
    font-weight: bold;
  }
  label.small {
    align-self: flex-start;
    padding: 7px;
    padding-top: 0px;
    padding-left: 0px;
    font-size: 8px;
    font-weight: 600;
  }

  input {
    border-radius: 5px;
    width: 350px;
    height: 45px;
    outline: none;
    border: 0;
    background-color: rgb(244, 244, 244);
    border-bottom: solid 1px rgba(216, 217, 207, 0.7);
    padding-left: 10px;
    font-size: 15px;
    background-color: transparent;
  }

  button {
    border-radius: 5px;
    width: 350px;
    height: 50px;
  }
  div h6 {
    color: rgb(244, 244, 244);
  }
`;

const RegistLink = styled.div`
  margin-top: 33px;

  div {
    padding-bottom: 7px;
    border-bottom: solid 1px rgba(216, 217, 207, 0.7);
    color: rgb(240, 165, 0);
    text-shadow: 1.5px 1.5px rgba(207, 117, 0, 0.1);
    font-weight: bold;
    font-size: 30px;
  }
`;
