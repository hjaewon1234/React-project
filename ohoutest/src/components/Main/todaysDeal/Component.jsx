import styled from "styled-components";
import { Link } from "react-router-dom";

const TodaysDealComponent = ({ itemArr, testArr }) => {
  return (
    <TodaysDealCompBox>
      {/* <div className="subtitle">
        <div>오늘의딜</div>
        <Link to={"/"}>더보기</Link>
      </div>
      <div className="today-deal-container">
        <Link to={"/"}>
          <img src="/img/item/itemPrev1.jpg" />
        </Link>
        <Link to={"/"}>
          <img src="/img/item/itemPrev2.jpg" />
        </Link>
        <Link to={"/"}>
          <img src="/img/item/itemPrev3.jpg" />
        </Link>
        <Link to={"/"}>
          <img src="/img/item/itemPrev4.jpg" />
        </Link>
        <button>클릭</button>
      </div> */}
      {testArr.map((elem, idx) => {
        console.log(elem);
        return (
          <div key={`testArr - ${idx}`}>
            {elem.aa}
            {elem.ab}
            {elem.ba}
            {elem.bb}
            {elem.ca}
            {elem.cb}
          </div>
        );
      })}
    </TodaysDealCompBox>
  );
};

export default TodaysDealComponent;

const TodaysDealCompBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  .subtitle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .subtitle div {
    margin: 0px 5px;
    font-weight: bold;
  }
  .subtitle :first-child {
    font-size: 24px;
  }
  .subtitle :last-child {
    color: rgb(255, 119, 119);
    letter-spacing: -1px;
    text-decoration: none;
  }
  .today-deal-container {
    display: flex;
    gap: 20px;
  }
  .today-deal-container a {
    font-size: 0;
  }
  a {
    overflow: hidden;
    border-radius: 8px;
  }
  a img {
    width: 100%;
  }
  a img:hover {
    transform: scale(1.1);
    transition: transform 0.25s;
  }
  a img:not(:hover) {
    transform: scale(1);
    transition: transform 0.2s;
  }
`;
