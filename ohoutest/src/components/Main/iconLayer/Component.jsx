import { Link } from "react-router-dom";
import styled from "styled-components";

const IconLayerComponent = () => {
  const iconArr = [
    "삼성초특가",
    "BEST",
    "오늘의딜",
    "초특가모음",
    "빠른배송",
    "프리미엄",
    "오굿즈",
    "크리스마스",
    "오!쇼룸",
    "기획전",
  ];
  const itemSign = (param) => {
    return <span className="item-text">{param}</span>;
  };

  const iconMaker = () => {
    return iconArr.map((elem, idx) => {
      return (
        <Link to={"/"} className="icon-item" key={`iconArr - ${idx}`}>
          <img src={`/img/iconLayer/icon${idx + 1}.jpg`} />
          <div>{elem}</div>
          {idx === 0 || idx === 7 ? itemSign("HOT") : null}
          {idx === 3 || idx === 8 ? itemSign("SALE") : null}
        </Link>
      );
    });
  };

  return <IconLayerCompBox>{iconMaker()}</IconLayerCompBox>;
};

export default IconLayerComponent;

const IconLayerCompBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  font-weight: bold;

  .icon-item {
    text-decoration: none;
    color: black;
    position: relative;
  }
  .icon-item img {
    width: 70px;
    border-radius: 20px;
  }
  .icon-item div {
    margin-top: 5px;
  }
  .icon-item span {
    position: absolute;
    top: -8px;
    right: -2px;
  }
  .item-text {
    background-color: rgb(255, 119, 119);
    border-radius: 10px;
    padding: 2px 5px 2px;
    font-size: 0.7em;
    font-weight: bold;
    color: white;
    line-height: 15px;
    line-height: 1.5em;
  }

  @media only screen and (max-width: 1440px) {
    width: 1000px;
  }
  @media only screen and (max-width: 1024px) {
    width: 750px;
    .icon-item img {
      width: 60px;
    }
    a {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    .icon-item img {
      width: 60px;
    }
    a {
      font-size: 12px;
    }
    .icon-item img {
      width: 100%;
    }
    .icon-item {
      width: 15%;
    }
  }
  @media only screen and (max-width: 425px) {
    gap: 0;
    justify-content: space-between;
    a {
      font-size: 12px;
    }
    .icon-item img {
      width: 100%;
    }
    .icon-item {
      width: 30%;
      margin: 5px;
    }
  }
`;
