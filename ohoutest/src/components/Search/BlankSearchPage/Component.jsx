import styled from "styled-components";

const BlankSearchPageComp = () => {
  return (
    <BlankSearchPageBox>
      <div>
        <img src="/api/downloadcat2.png" />
      </div>

      <div>앗! 찾으시는 결과가 없네요.</div>
    </BlankSearchPageBox>
  );
};

const BlankSearchPageBox = styled.div`
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

export default BlankSearchPageComp;
