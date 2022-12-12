import styled from "styled-components";

import { useState } from "react";

const ManagerInfoComponent = (props) => {
  const [accodion, setAccodion] = useState(true);

  return (
    <Infodiv>
      <div>
        <div
          onClick={() => setAccodion(!accodion)}
          style={{ fontSize: "20px" }}
        >
          {props.title}
        </div>
        <InfoContentDiv
          style={{
            display: accodion ? "none" : "block",
          }}
        >
          <AccoContents>
            <div>
              <img src="./Img/testImg.png" style={{ width: "70px" }} />
              <div>[ 까시미어 ] [사은품 증정] 멀티 드레스룸 행거 1+1 SET</div>
            </div>
          </AccoContents>

          <PagingDiv>
            <NumberBox>1</NumberBox>
            <NumberBox>2</NumberBox>
            <NumberBox>3</NumberBox>
            <NumberBox>4</NumberBox>
          </PagingDiv>
        </InfoContentDiv>
      </div>
    </Infodiv>
  );
};

export default ManagerInfoComponent;

const Infodiv = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  text-align: center;
  & > div {
    margin: auto;
    width: 70%;
    background-color: #f0a500;
    border-radius: 10px;
  }
`;

const InfoContentDiv = styled.div`
  background-color: #f4f4f4;
  border-radius: 0 0 10px 10px;
`;
const PagingDiv = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
  padding-bottom: 10px;
`;
const NumberBox = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  width: 20px;
`;
const AccoContents = styled.div`
  padding: 10px;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
  }
`;
