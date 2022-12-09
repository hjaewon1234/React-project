import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const ManagerInfoComponent = () => {
  return (
    <Infodiv>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>주문 내역</Accordion.Header>
          <Accordion.Body>
            <InfoUnit>이곳에 정리하자1</InfoUnit>
            <InfoUnit>이곳에 정리하자2</InfoUnit>
            <InfoUnit>이곳에 정리하자3</InfoUnit>
            <InfoUnit>이곳에 정리하자4</InfoUnit>
            <InfoUnit>이곳에 정리하자5</InfoUnit>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>고객 요청 사항</Accordion.Header>
          <Accordion.Body>
            이쪽에 고객 요청 사항에 대한 내용을 넣으면 된다.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>불만 사항</Accordion.Header>
          <Accordion.Body>
            이쪽에 불만 사항에 대한 내용을 넣으면 된다.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Infodiv>
  );
};

export default ManagerInfoComponent;

const Infodiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  text-align: center;
  & > div {
    margin: auto;
    width: 70%;
  }
`;
// row-gap 은 플랙스 간의 간격을 얼마나 줄 지 설정하는것이고
// margin:auto는 사이에 마진을 같게 해서 중앙 정렬처럼 보여주게한다.
const InfoUnit = styled.div``;
