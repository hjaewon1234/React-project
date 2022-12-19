import styled from "styled-components";
import { useState } from "react";

const FileAddComponent = ({ title, upload }) => {
  const [accodion, setAccodion] = useState(true);

  return (
    <Infodiv>
      <div>
        <UpperAcco onClick={() => setAccodion(!accodion)}>
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>{title}</div>
          <div style={{ paddingRight: "3%" }}>
            <img
              src="/arrow-up-solid.svg"
              style={{
                width: "22px",
                rotate: accodion ? "180deg" : "0deg",
              }}
            />
          </div>
        </UpperAcco>
        <InfoContentDiv
          style={{
            display: accodion ? "none" : "block",
          }}
        >
          <AccoContents>
            <form encType="multipart/form-data" onSubmit={upload}>
              <input type="text" name="name" placeholder="name" />
              <input type="number" name="price" placeholder="price" />
              <input type="text" name="brand" placeholder="brand" />
              <input type="text" name="description" placeholder="description" />
              <input type="file" name="file" multiple />
              <button type="submit ">상품 추가</button>
            </form>
          </AccoContents>
        </InfoContentDiv>
      </div>
    </Infodiv>
  );
};

export default FileAddComponent;

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
  cursor: pointer;
`;
const AccoContents = styled.div`
  padding: 10px;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    row-gap: 20px;
  }
  & > form > input {
    width: 70%;
    margin: auto;
  }
`;
const UnitDiv = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid black;
`;
const UpperAcco = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 3%;
  cursor: pointer;
`;
const ShippingDiv = styled.div`
  border: 1px solid black;
  padding: 3px;
  border-radius: 7px;
  font-weight: bold;
  background-color: #f0a500;
`;
