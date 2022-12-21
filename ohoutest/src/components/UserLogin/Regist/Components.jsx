import { useState } from "react";
import styled from "styled-components";
import Post from "../../../modules/Api/kakaoApi";
import {
  signUpUser,
  overlapId,
  overlapNickName,
} from "../../../modules/Slice/registSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
const RegistComponents = () => {
  // const dispathch = useDispatch();

  const [inputId, setId] = useState("");
  const [inputPw, setPw] = useState("");
  const [inputPw1, setPw1] = useState("");
  const [inputName, setName] = useState("");
  const [inputAdress, setAdress] = useState("");
  const [inputAdress1, setinputAdress1] = useState({
    address: "",
  });
  // const [inputAdress1, inputAdress1] = useState("");
  const [popup, setPopup] = useState(false);
  const [checkItems, setCheckItems] = useState([]);
  // const [openPostcode, setOpenPostcode] = useState(false);
  const dispatch = useDispatch();

  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = React.useState("");
  const [nameMessage, setNameMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    React.useState("");

  // 유효성 검사
  const [isId, setIsId] = React.useState(false);
  const [isname, setIsName] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);

  const [checkedButtons, setCheckedButtons] = useState([]);

  const [allChecked, setAllchecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-Z0-9]{6,30}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("6-12사이 영문 대소문자 또는 숫자를 입력해 주세요");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 3 || currentName.length > 5) {
      setNameMessage("닉네임은 3글자 이상 5글자 이하로 입력해주세요!");
      setIsName(false);
    } else {
      setNameMessage("사용가능한 닉네임 입니다.");
      setIsName(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPw(currentPassword);
    const passwordRegExp =
      /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
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

  const registHandle = () => {
    dispatch(
      signUpUser({
        inputId,
        inputPw,
        inputPw1,
        inputName,
        inputAdress,
        ...inputAdress1,
      })
    );
  };

  //  checkbox

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedButtons([...checkedButtons, id]);
      console.log("체크 반영 확인");
    } else {
      setCheckedButtons(checkedButtons.filter((button) => button !== id));
      console.log("체크 해제 확인");
    }
  };

  const isAllChecked = checkedButtons.length === 5;
  const checkDisble = !isAllChecked;

  const data = [
    { id: 0, title: "만 14세 이상입니다." },
    { id: 1, title: "이용약관" },
    { id: 2, title: "개인정보수집 및 이용동의" },
    { id: 3, title: "개인정보 마케팅 활용 동의" },
    { id: 4, title: "이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신" },
  ];

  const SinglecheckHandle = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const AllcheckHandle = (checked) => {
    if (checked) {
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const overlapIdHandle = () => {
    dispatch(overlapId({ inputId }));
  };

  const overlapNickNameHandle = () => {
    dispatch(overlapNickName({ inputName }));
  };

  const handleInput = (e) => {
    setinputAdress1({
      ...inputAdress1,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = (data) => {
    setPopup(!popup);
  };

  console.log(allChecked);
  const handelAllChecked = (e) => {
    setAllchecked(!allChecked);
    setChecked1(!allChecked);
    setChecked2(!allChecked);
    setChecked3(!allChecked);
    setChecked4(!allChecked);
    setChecked5(!allChecked);
  };

  const handelChecked1 = (e) => {
    setChecked1(!checked1);
    if (!checked1 === false) {
      setAllchecked(checked1);
    }
  };
  const handelChecked2 = (e) => {
    setChecked2(!checked2);
  };
  const handelChecked3 = (e) => {
    setChecked3(!checked3);
  };
  const handelChecked4 = (e) => {
    setChecked4(!checked4);
  };
  const handelChecked5 = (e) => {
    setChecked5(!checked5);
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
              pattern="[a-zA-Z0-9]"
              onChange={onChangeId}
              placeholder={"아이디"}
            />
            <p className="message"> {idMessage} </p>
            <button
              className="idBtnOverlap"
              onClick={() => {
                overlapIdHandle();
              }}
              disabled={inputId.length <= 5 ? true : false}
            >
              중복 ID 검사
            </button>
            <label> 비밀번호</label>
            <input
              type={"password"}
              value={inputPw}
              onInput={(e) => {
                setPw(e.target.value);
              }}
              placeholder={"비밀번호"}
              onChange={onChangePassword}
            />
            <p className="message">{passwordMessage}</p>
            <label> 비밀번호 확인</label>
            <input
              type={"password"}
              value={inputPw1}
              onInput={(e) => {
                setPw1(e.target.value);
              }}
              onChange={onChangePasswordConfirm}
              placeholder={"비밀번호 확인"}
            />
            <p className="message">{passwordConfirmMessage}</p>
            <label> 닉네임</label>
            <input
              type={"text"}
              value={inputName}
              onInput={(e) => {
                setName(e.target.value);
              }}
              placeholder={"닉네임 (3~15자)"}
              onChange={onChangeName}
            />
            <p className="message">{nameMessage}</p>
            <button
              className="idBtnOverlap"
              onClick={() => {
                overlapNickNameHandle();
              }}
              disabled={inputName.length <= 2 ? true : false}
            >
              닉네임 중복 검사
            </button>
            <label> 주소</label>
            <div className="address_search">
              <input
                className="user_enroll_text"
                placeholder="주소 찾기 버튼을 눌러주세요"
                type="text"
                required={true}
                name="address"
                onChange={handleInput}
                value={inputAdress1.address}
                onInput={(e) => {
                  inputAdress1(e.target.value);
                }}
                disabled
              />
            </div>
            <input
              type={"text"}
              value={inputAdress}
              onInput={(e) => {
                setAdress(e.target.value);
              }}
              placeholder={"나머지 주소"}
            />
            {popup && (
              <Post
                popup={popup}
                autoClose
                company={inputAdress1}
                setcompany={setinputAdress1}
              ></Post>
            )}
            <div className="kakaoAdressP" value={""}>
              <button className="kakaoAdress" onClick={handleComplete}>
                주소 찾기
              </button>
              <button
                className="kakaoAdress"
                disabled={inputAdress.length <= 5 ? true : false}
              >
                주소 입력
              </button>
            </div>
            <label> 약관동의</label>
          </RegistMidStlye>
          <AcceptStlye>
            {/* <table>
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      name="select-all"
                      onChange={(e) => AllcheckHandle(e.target.checked)}
                      checked={checkItems.length === data.length ? true : false}
                    />
                  </th>
                  <th className="check1">전체동의</th>
                </tr>
              </thead>
              <thead>
                {data?.map((data, key) => (
                  <tr key={key}>
                    <td>
                      <input
                        type="checkbox"
                        name={`select-${data.id}`}
                        onChange={(e) =>
                          SinglecheckHandle(e.target.checked, data.id)
                        }
                        checked={checkItems.includes(data.id) ? true : false}
                      />
                      <label></label>
                    </td>
                    <td className="second-row">{data.title}</td>
                  </tr>
                ))}
              </thead>
            </table> */}
            <label>
              <input
                id="check1"
                type={"checkbox"}
                checked={allChecked}
                onChange={handelAllChecked}
              />
              전체동의
            </label>
            <label>
              <input
                id="check2"
                type={"checkbox"}
                checked={checked1}
                onChange={handelChecked1}
              />
              만 14세 이상입니다
            </label>{" "}
            <label>
              <input
                id="check3"
                type={"checkbox"}
                checked={checked2}
                onChange={handelChecked2}
              />
              이용약관
            </label>{" "}
            <label>
              <input
                id="check4"
                type={"checkbox"}
                checked={checked3}
                onChange={handelChecked3}
              />
              개인정보수집 및 이용동의
            </label>
            <label>
              <input
                id="check5"
                type={"checkbox"}
                checked={checked4}
                onChange={handelChecked4}
              />
              개인정보 마케팅 활용 동의
            </label>{" "}
            <label>
              <input
                id="check6"
                type={"checkbox"}
                checked={checked5}
                onChange={handelChecked5}
              />
              이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신
            </label>
            {checked1 === true && checked2 === true && checked3 === true ? (
              <Link href={`/`}>
                <button
                  onClick={() => {
                    registHandle();
                  }}
                  checked={checkItems.includes(data.id) ? true : false}
                  disabled={
                    inputId.length <= 5 ||
                    inputPw.length <= 7 ||
                    inputName.length <= 2
                      ? true
                      : false
                  }
                >
                  회원가입하기
                </button>
              </Link>
            ) : (
              ""
            )}
            {/* <div>
              <input type="checkbox" id="check1" />
              <label htmlFor="check1"></label>
              <h6> 전체동의</h6>
            </div>
            <div>
              <input type="checkbox" id="check2" />
              <label htmlFor="check2"></label>
              <h6> 만 14세 이상입니다.</h6>
            </div>
            <div>
              <input type="checkbox" id="check3" />
              <label htmlFor="check3"></label>
              <h6> 이용약관</h6>
            </div>
            <div>
              <input type="checkbox" id="check4" />
              <label htmlFor="check4"></label>
              <h6> 개인정보수집 및 이용동의</h6>
            </div>
            <div>
              <input type="checkbox" id="check5" />
              <label htmlFor="check5"></label>
              <h6> 개인정보 마케팅 활용 동의</h6>
            </div>
            <div>
              <input type="checkbox" id="check6" />
              <label htmlFor="check6"></label>
              <h6> 이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신</h6>
            </div> */}
          </AcceptStlye>

          <LoginStyle>
            <Link to={"/signUp"} style={{ textDecoration: "none" }}>
              <div> 이미 아이디가 있으신가요? </div>
            </Link>
            {/* <h6>이미 아이디가 있으신가요? </h6> */}
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
  margin-top: 33px;
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
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    transition: 0.4s ease-in-out;
    &:disabled {
      transition: 0.8s ease-in-out;
      background-color: rgb(216, 217, 207);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
    }
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
    border-radius: 8px;
    width: 350px;
    height: 50px;
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
    &:disabled {
      transition: 0.8s ease-in-out;
      background-color: rgb(216, 217, 207);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
    }
  }
  .message {
    font-size: 12px;
    color: green;
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
  margin-top: 15px;

  label {
    padding: 0 15px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 55px;
    font-size: 12px;
    font-weight: bold;
    gap: 10px;
  }

  label:nth-child(1),
  label:nth-child(2),
  label:nth-child(3),
  label:nth-child(4),
  label:nth-child(5),
  label:nth-child(6) {
    font-size: 12px;
    input[type="checkbox"] {
      -webkit-appearance: radio;
      transform: scale(1.5);
      accent-color: rgb(240, 165, 0);
      &::after {
        display: none;
      }
    }
  }

  label:nth-child(2)::after,
  label:nth-child(3)::after,
  label:nth-child(4)::after {
    margin-left: -5px;
    content: "(필수)";
    font-size: 10px;
    color: rgb(240, 165, 0);
  }

  label:nth-child(5)::after,
  label:nth-child(6)::after {
    margin-left: -5px;
    content: "(선택)";
    font-size: 10px;
    color: rgb(240, 165, 0);
  }

  div:nth-child(5)::after {
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
    padding-bottom: 7px;
    border-top: solid 1px rgba(216, 217, 207, 0.7);
    color: rgb(240, 165, 0);
    text-shadow: 1.5px 1.5px rgba(207, 117, 0, 0.1);
    font-weight: bold;
    font-size: 30px;
  }
`;
