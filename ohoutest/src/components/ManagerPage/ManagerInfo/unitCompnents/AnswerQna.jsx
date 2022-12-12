import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const AnswerQna = () => {
  const { id } = useParams(useLocation());
  console.log(id);
  return (
    <AnswerQnaDiv>
      <AnswerQnaInner>
        <div>
          <div>제목</div>
          <div>문의 사항</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div>32143124321432143214214</div>
        <Link to="/">
          <button>눌러라눌러</button>
        </Link>
      </AnswerQnaInner>
    </AnswerQnaDiv>
  );
};

export default AnswerQna;

const AnswerQnaDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnswerQnaInner = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  width: 50%;
  & > div {
    margin: 10px 0;
    display: flex;
    column-gap: 50px;
  }
  input {
    width: 100%;
    padding: 5px 10px;
  }
`;
