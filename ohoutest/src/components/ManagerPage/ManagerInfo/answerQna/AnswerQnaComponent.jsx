import { Link, useLocation, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import styled from "styled-components";

const AnswerQnaComponent = ({ qnaInfo }) => {
  const { id } = useParams(useLocation());
  const [state, setState] = useState(qnaInfo[id].qnaAnswer);
  // const [dbConnect, setDbConnect] =
  // db통신이 있을때 변하는 걸 useState로 해준다?
  const numberingId = qnaInfo[id].id;
  console.log(numberingId);
  return (
    <AnswerQnaDiv>
      <AnswerQnaInner>
        <div>
          <div>
            <img
              src={`/api/download${qnaInfo[id].User.userImg}`}
              style={{ width: "100px", borderRadius: "100%" }}
            />
          </div>
          <div> {qnaInfo[id].User.userName}</div>
        </div>
        <div>
          <div className="imgDiv">
            <img
              src={`/api/download${qnaInfo[id].Product.img.split(",")[0]}`}
              style={{ width: "100px" }}
            />
          </div>
          <div>{qnaInfo[id].Product.name}</div>
        </div>
        <div>{qnaInfo[id].text}</div>
        <LinkDiv>
          <div>
            <Link to="/managerInfo">
              <button>리뷰 확인</button>
            </Link>
          </div>
        </LinkDiv>
      </AnswerQnaInner>
    </AnswerQnaDiv>
  );
};

export default AnswerQnaComponent;

const AnswerQnaDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnswerQnaInner = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  width: 50%;
  z-index: 2;
  min-width: 350px;
  & > div {
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 50px;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 1px solid #f0a500;
  }

  & > div:last-child {
    display: flex;

    justify-content: right;
  }
  textarea {
    width: 100%;
    height: 100px;
    resize: none;
    boreder: none;
    padding: auto;
  }
  @media (max-width: 900px) {
    .imgDiv {
      display: none;
    }
  }
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: space-between;
  & > div > a > button {
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
    border-radius: 10px;
    width: 100px;
    border: 1px solid #f0a500;
    background-color: #f0a500;
  }
`;
