import { useState } from "react";
import styled from "styled-components";
import { logInUser } from "../../../modules/Slice/loginSlice";
import { useDispatch } from "react-redux";
const Login2Components = ({ join }) => {
  const [inputId, setId] = useState("");
  const [inputPw, setPw] = useState("");

  const dispatch = useDispatch();
  const logInHandle = () => {
    dispatch(
      logInUser({
        inputId,
        inputPw,
      })
    );
  };

  return (
    <>
      <RegistMain autoClose>
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
          <label className="small">
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
          </label>
          <input
            type={"password"}
            value={inputPw}
            onInput={(e) => {
              setPw(e.target.value);
            }}
            placeholder={"비밀번호"}
          />
        </RegistMidStlye>
        <button
          onClick={() => {
            logInHandle();
          }}
        >
          로그인
        </button>
        <button>로그아웃</button>
      </RegistMain>
    </>
  );
};
export default Login2Components;

const KakaoApi = styled.div`
  button {
    cursor: pointer;
  }
`;

const RegistMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    background-color: rgb(240, 165, 0);
    outline: none;
    border: 0;
    width: 350px;
    height: 45px;
    font-size: 18px;
    font-weight: bold;
    color: rgb(244, 244, 244);
    border-radius: 5px;
  }
`;
const RegistTopStlye = styled.div`
  border-bottom: 1px solid rgb(244, 244, 244);
  margin-bottom: 20px;
  width: 350px;
`;
const RegistMidStlye = styled.div`
  * {
    margin-bottom: 8px;
  }

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
    font-size: 14px;
    font-weight: 600;
  }

  input {
    border-radius: 5px;
    width: 350px;
    height: 45px;
    outline: none;
    border: 0;
    background-color: rgb(244, 244, 244);
    padding-left: 10px;
    font-size: 15px;
  }

  button {
    border-radius: 5px;
    width: 350px;
    height: 50px;
  }
  div h6 {
    color: rgb(244, 244, 244);
  }
  .idBtnOverlap {
    width: 225px;
    height: 35px;
    margin-top: 17px;
    margin-bottom: 17px;
  }

  .kakaoAdressP {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .kakaoAdress {
    width: 170px;
    height: 50px;
  }
`;
const AcceptStlye = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 350px;
  border: 1.5px solid rgb(244, 244, 244);
  margin-top: 5px;
  margin-bottom: 30px;
  cursor: pointer;

  div {
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    gap: 10px;
  }
  div input[type="checkbox"] {
    display: none;
  }

  div input[type="checkbox"] + label {
    display: inline-block;
    width: 25px;
    height: 25px;
    position: relative;
    border: 1px solid rgb(244, 244, 244);
  }

  div input[id="check1"]:checked + label::after,
  div input[id="check2"]:checked + label::after,
  div input[id="check3"]:checked + label::after,
  div input[id="check4"]:checked + label::after,
  div input[id="check5"]:checked + label::after,
  div input[id="check6"]:checked + label::after {
    content: "✔";
    display: inline-block;
    font-size: 15px;
    width: 25px;
    height: 25px;
    text-align: center;
    position: absolute;
    left: 0px;
    top: 0px;
    background-color: rgb(240, 165, 0);
    border-color: rgb(240, 165, 0);
  }

  div h6 {
    font-size: 12px;
    color: rgb(26, 28, 32);
  }

  div:nth-child(2)::after,
  div:nth-child(3)::after,
  div:nth-child(4)::after {
    margin-left: -5px;
    content: "(필수)";
    font-size: 10px;
    color: rgb(240, 165, 0);
  }
  div:nth-child(5)::after,
  div:nth-child(6)::after {
    margin-left: -5px;
    content: "(선택)";
    font-size: 10px;
    color: rgb(240, 165, 0);
  }

  div:nth-child(1)::after {
    margin-left: -5px;
    content: "선택항목에 대한 동의 포함";
    font-size: 5px;
    font-weight: bold;
    color: rgb(240, 165, 0);
  }
`;

const LoginStyle = styled.div`
  margin-bottom: 50px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  div h6 {
    font-size: 15px;
  }
  div h6::after {
    margin-left: 12px;
    content: "로그인";
    text-decoration: underline;
  }
`;
