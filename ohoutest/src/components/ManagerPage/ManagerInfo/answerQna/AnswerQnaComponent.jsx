import { Link, useLocation, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import styled from "styled-components";

const AnswerQnaComponent = ({ qnaInfo, axiosFunc, tempQnaInfoThunk }) => {
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
          <div>{qnaInfo[id].User.userId}</div>
          <div>{qnaInfo[id].Product.name}</div>
        </div>
        <div>{qnaInfo[id].qnaText}</div>
        <textarea
          onInput={(e) => setState(e.target.value)}
          value={state || ""}
        />

        <Link to="/managerInfo">
          <button
            onClick={() => {
              axiosFunc(numberingId, state.toString(), id);
            }}
          >
            답변 제출
          </button>
        </Link>
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
  & > div {
    margin: 10px 0;
    display: flex;
    column-gap: 50px;
  }
  textarea {
    width: 100%;
    height: 100px;
    resize: none;
    boreder: none;
    padding: auto;
  }
`;
