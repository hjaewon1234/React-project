import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

// import Post from "../../../modules/Api/kakaoApi";

import {
  signUpUser,
  overlapId,
  overlapNickName,
} from "../../../../modules/Slice/registSlice";
import { useDispatch } from "react-redux";

import React from "react";

const MyPasswordComponent = ({ passwordChange, userInfo }) => {
  const [inputPw, setPw] = useState("");
  const [inputPw1, setPw1] = useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    React.useState("");

  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPw(currentPassword);
    const passwordRegExp =
      /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("8~15 사이 숫자+영문+특수문자로 입력해주세요.");
      setIsPassword(false);
    }
    //  else if (inputPw1 !== currentPassword) {
    //   setPasswordMessage("입력한 비밀번호 확인과 같지 않습니다.");
    //   setIsPassword(false);
    // }
    else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPw1(currentPasswordConfirm);
    if (inputPw !== currentPasswordConfirm) {
      setPasswordConfirmMessage("입력한 비밀번호와 같지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("비밀번호가 확인 되었습니다.");
      setIsPasswordConfirm(true);
    }
  };
  return (
    <>
      <ShippingUnderDiv>
        <div>
          <h2>비밀번호 변경</h2>
        </div>
        <div>
          <div>
            <h4>새 비밀번호</h4>
          </div>
          <div>
            <h4>
              영문, 숫자, 특수문자 를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </h4>
          </div>
          <div>
            <input
              className="inputBox"
              type={"password"}
              value={inputPw}
              onInput={(e) => {
                setPw(e.target.value);
              }}
              placeholder={"비밀번호"}
              onChange={onChangePassword}
              maxLength={15}
            />
          </div>
          <div>
            <p className={isPassword ? "messageGreen" : "messageRed"}>
              {passwordMessage}
            </p>
          </div>
          <div>
            <label>
              <h4> 비밀번호 확인</h4>
            </label>
          </div>
          <div className="inputBox">
            <input
              className="inputBox"
              type={"password"}
              value={inputPw1}
              onInput={(e) => {
                setPw1(e.target.value);
              }}
              onChange={onChangePasswordConfirm}
              placeholder={"비밀번호 확인"}
              maxLength={15}
            />
          </div>
          <div>
            <p className={isPasswordConfirm ? "messageGreen" : "messageRed"}>
              {passwordConfirmMessage}
            </p>
          </div>
          <RegistMidStlye>
            <button
              onClick={() => {
                if (inputPw == inputPw1) {
                  alert("비밀 번호가 수정 되었습니다.");
                  passwordChange(inputPw, userInfo.userId);
                } else {
                  alert("비밀번호가 서로 다릅니다.");
                }
              }}
            >
              비밀 번호 수정
            </button>
          </RegistMidStlye>
        </div>
      </ShippingUnderDiv>
    </>
  );
};
export default MyPasswordComponent;

const ShippingUnderDiv = styled.div`
  width: 50%;

  margin: auto;
  margin-top: 20px;
  border: 1px solid #f0a500;
  border-radius: 10px;
  & > div > div {
    margin: 20px 10px 20px;
    display: flex;
    justify-content: center;
  }
  & > div:first-child {
    text-align: left;
    margin: 20px 10px 20px;
    display: flex;
    column-gap: 10px;
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      justify-content: center;
    }
  }
  & > h2 {
    margin-top: 10px;
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
  .inputBox {
    width: 90%;
  }
  .messageGreen {
    font-size: 12px;
    color: green;
  }
  .messageRed {
    font-size: 12px;
    color: red;
  }
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
    margin-bottom: 5px;
    padding: 10px;
    padding-left: 0px;
    font-weight: bold;
    font-size: 15px;
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
    border-bottom: solid 1px rgba(216, 217, 207, 0.7);
    padding-left: 10px;
    font-size: 15px;
    background-color: transparent;
  }

  button {
    background-color: rgb(240, 165, 0);
    outline: none;
    border: 0;
    width: 90%;
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
  div.kakaoAdress {
    background-color: rgb(240, 165, 0);
    outline: none;
    border: 0;
    width: 200px;
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
  div.kakaoAdress1 {
    background-color: rgb(240, 165, 0);
    outline: none;
    border: 0;
    width: 200px;
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

  .idBtnOverlap {
    width: 225px;
    height: 35px;
    margin-top: 17px;
    margin-bottom: 33px;
    &:disabled {
      background-color: rgb(216, 217, 207);
    }
  }

  .kakaoAdressP {
    margin-top: 33px;
    margin-bottom: 33px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .kakaoAdress {
    width: 170px;
    height: 50px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    transition: 0.4s ease-in-out;
    &:disabled::before {
      content: "비 활성화";
      width: 150px;
      transition: 0.8s ease-in-out;
      background-color: rgb(216, 217, 207);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
    }
  }
  .kakaoAdress1 {
    width: 170px;
    height: 50px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    transition: 0.4s ease-in-out;
    &:disabled::before {
      font-size: 13px;
      content: "세부 주소 입력 하세요";
      width: 150px;
      transition: 0.8s ease-in-out;
      background-color: rgb(216, 217, 207);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
    }
  }

  .kakaoAdress1::before {
    font-size: 13px;
    content: "세부 주소 입력 완료";
  }
  .message {
    font-size: 12px;
    color: green;
  }
  .messageGreen {
    font-size: 12px;
    color: green;
  }
  .messageRed {
    font-size: 12px;
    color: red;
  }
`;
