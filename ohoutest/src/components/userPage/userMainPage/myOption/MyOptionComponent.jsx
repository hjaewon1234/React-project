import { useState } from "react";

import styled from "styled-components";
import ModalComponents from "../../../UserLogin/Modal/Component";

const MyOptionComponent = ({ upload, userInfo }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [nameChange, setNameChange] = useState(userInfo.userName);
  const [inputAdress, setInputAdress] = useState(userInfo.userAddress);
  const [inputAdress1, setinputAdress1] = useState(userInfo.userAddress1);

  const [tempImgFile, setTempImgFile] = useState([]);
  console.log(userInfo);
  const openModal = (data) => {
    setModalOpen(!modalOpen);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  function tempImgArr(e) {
    const imageLists = e.target.files[0];
    const currentImageUrl = URL.createObjectURL(imageLists);
    setTempImgFile(currentImageUrl);
  }

  return (
    <>
      <ShippingUnderDiv>
        <div>
          <h2>회원 정보 수정</h2>
        </div>
        <form
          encType="multipart/form-data"
          onSubmit={upload}
          acceptCharset="utf-8"
        >
          <RegistMidStlye>
            <div>
              <label>
                <h3>닉네임 </h3>
              </label>
              <input
                value={nameChange}
                name="name"
                type="text"
                onChange={(e) => setNameChange(e.target.value)}
              />
            </div>
          </RegistMidStlye>
          <RegistMidStlye>
            <div>
              <label>
                <h3>주소</h3>
              </label>
              <div className="address_search">
                <input
                  className="user_enroll_text"
                  placeholder="주소 찾기 버튼을 눌러주세요"
                  type="text"
                  required={true}
                  name="address1"
                  value={inputAdress1}
                  onChange={(e) => setinputAdress1(e.target.value)}
                  disabled
                />
              </div>
              <input
                type={"text"}
                value={inputAdress}
                name="address"
                onInput={(e) => {
                  setInputAdress(e.target.value);
                }}
                placeholder={"나머지 주소"}
                maxLength={12}
              />

              {modalOpen && (
                <>
                  <ModalComponents
                    // autoClose
                    company={inputAdress1}
                    setcompany={setinputAdress1}
                    open={modalOpen}
                    close={closeModal}
                    header="주소 찾기"
                  ></ModalComponents>
                </>
              )}
              <div className="kakaoAdressP">
                <div className="kakaoAdress" onClick={openModal}>
                  주소 찾기
                </div>

                <div
                  className="kakaoAdress1"
                  disabled={inputAdress?.length <= 3 ? true : false}
                ></div>
              </div>
            </div>
          </RegistMidStlye>

          <RegistMidStlye>
            <div>
              <label>
                <h3>프로필 이미지</h3>
                <div>
                  {tempImgFile.length == 0 ? (
                    <img
                      src={`/api/download${userInfo.userImg}`}
                      style={{ borderRadius: "100%", width: "300px" }}
                    />
                  ) : (
                    <img
                      src={tempImgFile}
                      style={{ borderRadius: "100%", width: "300px" }}
                    />
                  )}
                </div>
                <div>
                  <input
                    multiple
                    type="file"
                    name="file"
                    onChange={(e) => tempImgArr(e)}
                    onClick={() => setTempImgFile(() => [])}
                  />
                </div>
              </label>
            </div>
          </RegistMidStlye>
          <RegistMidStlye>
            <button
              type="submit"
              onClick={() => alert("회원 정보가 수정 되었습니다.")}
            >
              회원 정보 수정
            </button>
          </RegistMidStlye>
        </form>
      </ShippingUnderDiv>
    </>
  );
};
export default MyOptionComponent;

const ShippingUnderDiv = styled.div`
  width: 50%;

  margin: auto;
  margin-top: 20px;
  border: 1px solid #f0a500;
  border-radius: 10px;
  & > div {
    text-align: left;
    margin: 40px 10px 20px;
    display: flex;
    column-gap: 10px;
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
