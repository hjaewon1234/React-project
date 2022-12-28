import styled from "styled-components";
import { useState } from "react";

const FileAddComponent = ({
  title,
  upload,
  homeAppArr,
  furnitureArr,
  homeAppMiddleFunc,
  furnitureMiddleFunc,
  tempImgArr,
}) => {
  const [accodion, setAccodion] = useState(true);
  const [bigSort, setBigSort] = useState(0);
  const [middleSort, setMiddleSort] = useState(0);
  const [tempImgFile, setTempImgFile] = useState([]);
  const [productName, setProductName] = useState("");

  function tempImgArr(e) {
    const imageLists = e.target.files;
    let imageUrlLists = [...tempImgFile];
    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      // URL.createObjectURL은 특정 파일 객체나 데이터의 참조를 가르키는 새로운 객체
      // URL을 생성하는 메서드 이다. 생성한 값은 현재 창에서 만 유효하다.
      console.log(currentImageUrl, imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }
    if (imageUrlLists.length > 4) {
      imageUrlLists = imageUrlLists.slice(0, 4);
    }

    setTempImgFile(imageUrlLists);
  }

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
            <form
              encType="multipart/form-data"
              onSubmit={upload}
              acceptCharset="utf-8"
            >
              <div>
                <div className="tagName">상품 이름 :</div>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="tagName">상품 가격 :</div>
                <div>
                  <input type="number" name="price" placeholder="price" />
                </div>
              </div>
              <div>
                <div className="tagName">상품 브랜드명 :</div>
                <div>
                  <input type="text" name="brand" placeholder="brand" />
                </div>
              </div>
              <div>
                <div className="tagName">상품 설명 :</div>
                <div>
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                  />
                </div>
              </div>
              <div style={{ alignItems: "center" }}>
                <div className="tagName">상품 이미지</div>
                <div>
                  {tempImgFile.map((image, index) => {
                    return (
                      <img
                        src={image}
                        style={{ width: "70px", marginRight: "10px" }}
                        key={index}
                      />
                    );
                  })}
                </div>
                <div>
                  <input
                    multiple
                    type="file"
                    name="file"
                    onChange={tempImgArr}
                    onClick={() => setTempImgFile((state) => state)}
                  />
                </div>
              </div>
              <div className="selectBox">
                <select
                  name="bigsort"
                  onChange={(e) => {
                    setBigSort((state) => (state = e.target.value));
                  }}
                >
                  <option value="0">가구</option>
                  <option value="1">가전</option>
                </select>
                <select
                  name="middlesort"
                  onChange={(e) => {
                    setMiddleSort((state) => (state = e.target.value));
                  }}
                >
                  {bigSort == "0"
                    ? furnitureArr.map((item, index) => (
                        <option key={index} value={index}>
                          {item}
                        </option>
                      ))
                    : homeAppArr.map((item, index) => (
                        <option key={index} value={index}>
                          {item}
                        </option>
                      ))}
                </select>
                <select name="smallsort">
                  {bigSort == "0"
                    ? furnitureMiddleFunc(middleSort)
                    : homeAppMiddleFunc(middleSort)}
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={() =>
                    alert(productName + " 상품이 등록 되었습니다.")
                  }
                >
                  상품 추가
                </button>
              </div>
            </form>
          </AccoContents>
        </InfoContentDiv>
      </div>
    </Infodiv>
  );
};

export default FileAddComponent;

const Infodiv = styled.div`
  .tagName {
    text-align: left;
    min-width: 120px;
    width: 200px;
  }
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
  @media (max-width: 700px) {
    .selectBox {
      flex-direction: column;
    }
  }
  @media (max-width: 530px) {
    .tagName {
      display: none;
    }
  }
`;

const InfoContentDiv = styled.div`
  background-color: #f4f4f4;
  border-radius: 0 0 10px 10px;
`;

const AccoContents = styled.div`
  padding: 10px;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    row-gap: 20px;
  }
  & > form > div {
    display: flex;
    width: 85%;
    column-gap: 10px;
    margin: auto;
    align-items: center;
    > div > input {
      width: 100%;
    }
  }
  & > form > div > select {
    margin-right: 20px;
    width: 150px;
    height: 25px;
  }

  & > form > div > button {
    border: 1px solid black;
    padding: 3px;
    border-radius: 7px;
    font-weight: bold;
  }
`;

const UpperAcco = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 3%;
  cursor: pointer;
`;
