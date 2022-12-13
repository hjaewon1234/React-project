import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Post from "../../modules/Api/kakaoApi";
import { signUpUser } from "../../modules/Slice/registSlice";
import { useDispatch } from "react-redux";
const RegistComponents = ({ join }) => {
  // const dispathch = useDispatch();
  // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [inputId, setId] = useState("");
  const [inputPw, setPw] = useState("");
  const [inputPw1, setPw1] = useState("");
  const [inputName, setName] = useState("");
  const [inputAdress, setAdress] = useState("");
  const [inputAdress1, setAdress1] = useState("");
  const [popup, setPopup] = useState(false);
  // const [openPostcode, setOpenPostcode] = useState(false);
  const dispatch = useDispatch();
  const registHandle = () => {
    dispatch(
      signUpUser({
        inputId,
        inputPw,
        inputPw1,
        inputName,
        inputAdress,
        inputAdress1,
      })
    );
  };

  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });

  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = (data) => {
    setPopup(!popup);
  };

  return (
    <>
      <KakaoApi>
        <RegistMain autoClose>
          <RegistTopStlye>
            <h3>회원가입</h3>
          </RegistTopStlye>
          <RegistMidStlye>
            <label> 아이디</label>
            <input
              type={"text"}
              value={inputId}
              onInput={(e) => {
                setId(e.target.value);
              }}
              placeholder={"아이디"}
            />
            <button className="idBtnOverlap">중복 ID 검사</button>
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
            <label> 비밀번호 확인</label>
            <input
              type={"password"}
              value={inputPw1}
              onInput={(e) => {
                setPw1(e.target.value);
              }}
              placeholder={"비밀번호 확인"}
            />
            <label> 닉네임</label>
            <label className="small">
              영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </label>
            <input
              type={"text"}
              value={inputName}
              onInput={(e) => {
                setName(e.target.value);
              }}
              placeholder={"별명 (2~15자)"}
            />
            <button className="idBtnOverlap">닉네임 중복 검사</button>
            <label> 주소</label>
            <div className="address_search">
              <input
                className="user_enroll_text"
                placeholder="주소"
                type="text"
                required={true}
                name="address"
                onChange={handleInput}
                value={(enroll_company.address, inputAdress1)}
                onInput={(e) => {
                  setAdress1(e.target.value);
                }}
              />

              {popup && (
                <Post
                  company={enroll_company}
                  setcompany={setEnroll_company}
                ></Post>
              )}
            </div>
            <input
              type={"text"}
              value={inputAdress}
              onInput={(e) => {
                setAdress(e.target.value);
              }}
              placeholder={"나머지 주소"}
            />
            <div className="kakaoAdressP" value={""}>
              <button className="kakaoAdress" onClick={handleComplete}>
                주소 찾기
              </button>
              <button className="kakaoAdress">주소 입력</button>
            </div>
            <label> 약관동의</label>
          </RegistMidStlye>
          <AcceptStlye>
            <div>
              <input type="checkbox" id="check1" />
              <label for="check1"></label>
              <h6> 전체동의</h6>
            </div>
            <div>
              <input type="checkbox" id="check2" />
              <label for="check2"></label>
              <h6> 만 14세 이상입니다.</h6>
            </div>
            <div>
              <input type="checkbox" id="check3" />
              <label for="check3"></label>
              <h6> 이용약관</h6>
            </div>
            <div>
              <input type="checkbox" id="check4" />
              <label for="check4"></label>
              <h6> 개인정보수집 및 이용동의</h6>
            </div>
            <div>
              <input type="checkbox" id="check5" />
              <label for="check5"></label>
              <h6> 개인정보 마케팅 활용 동의</h6>
            </div>
            <div>
              <input type="checkbox" id="check6" />
              <label for="check6"></label>
              <h6> 이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신</h6>
            </div>
          </AcceptStlye>

          <button
            onClick={() => {
              registHandle();
            }}
          >
            회원가입하기
          </button>
          <LoginStyle>
            <div>
              <h6>이미 아이디가 있으신가요? </h6>
            </div>
          </LoginStyle>
        </RegistMain>
      </KakaoApi>
    </>
  );
};
export default RegistComponents;

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
