import { Link, useLocation, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import styled from "styled-components";

const MyQnaModalComponent = () => {
  // const [dbConnect, setDbConnect] =
  // db통신이 있을때 변하는 걸 useState로 해준다?

  return (
    <AnswerQnaDiv>
      <AnswerQnaInner>
        <div>
          <div>{}</div>
          <div>{}</div>
        </div>
        <div>{}</div>
        <QnaContents>123</QnaContents>
        <LinkDiv>
          <div>
            <Link to="/userPage">
              <button>확인 완료</button>
            </Link>
          </div>
          <div></div>
        </LinkDiv>
      </AnswerQnaInner>
    </AnswerQnaDiv>
  );
};

export default MyQnaModalComponent;

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
const QnaContents = styled.div``;

const LinkDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
