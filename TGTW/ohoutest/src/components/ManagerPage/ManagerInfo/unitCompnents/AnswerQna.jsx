import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const AnswerQna = () => {
  const { id } = useParams(useLocation());
  return (
    <AnswerQnaDiv>
      <AnswerQnaInner>
        <div>
          <div>userId</div>
          <div>해당 상품 이름</div>
        </div>
        <div>
          문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항
          문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항
          문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항문의사항
        </div>
        <textarea />
        <Link to="/">
          <button>답변 제출</button>
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
  textarea {
    width: 100%;
    height: 100px;
    resize: none;
    boreder: none;
    padding: auto;
  }
`;
