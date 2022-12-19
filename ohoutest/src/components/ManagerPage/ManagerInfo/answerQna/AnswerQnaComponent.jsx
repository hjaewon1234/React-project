import { Link, useLocation, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import styled from "styled-components";

const AnswerQnaComponent = ({ qnaInfo, axiosFunc }) => {
  const { id } = useParams(useLocation());
  const [state, setState] = useState(qnaInfo[id].qnaAnswer);
  // const [dbConnect, setDbConnect] =
  // db통신이 있을때 변하는 걸 useState로 해준다?

  return (
    <AnswerQnaDiv>
      <AnswerQnaInner>
        <div>
          <div>{qnaInfo[id].User.userId}</div>
          <div>{qnaInfo[id].Product.name}</div>
        </div>
        <div>{qnaInfo[id].qnaText}</div>
        <textarea onInput={(e) => setState(e.target.value)} value={state} />
        <Link to="/managerInfo">
          <button
            onClick={() => {
              axiosFunc(qnaInfo[id].id, state.toString());

              // 문의사항에 관련된 거를 한번 불러와주면된다.
              // 불러올 방법은..?=> 결국 db를 무조건 한번 불러와야된다
              // thunk를 써야된다. num에 대한것을 어떻게 정의해 줄까
              // 10 / 20 이런거
              // parseInt(id/10)>id/10 ? id/10 - 1 : parseInt(id/10)
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
