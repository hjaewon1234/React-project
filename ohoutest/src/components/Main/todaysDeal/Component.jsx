import styled from "styled-components";
import { Link } from "react-router-dom";

const TodaysDealComponent = ({ itemArr }) => {
  return (
    <TodaysDealCompBox>
      <div className="subtitle">
        <div>오늘의딜</div>
        <Link to={"/"}>더보기</Link>
      </div>
      <div className="today-deal-container">
        {itemArr.map((elem, idx) => {
          return (
            <ItemBox key={`itemArr - ${idx}`}>
              <Link to={`/readmore/${elem.id}`}>
                <div className="today-deal-item-img">
                  <img src={`/api/download${elem.img.split(",")[0]}`} />
                </div>
                <div className="item-container">
                  <div className="item-brand">{elem.brand}</div>
                  <div className="item-name">{elem.name}</div>
                  <div className="item-price">
                    {elem.price.toLocaleString()}
                  </div>
                </div>
              </Link>
            </ItemBox>
          );
        })}
      </div>
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
    justify-content: space-between;
    word-break: break-word;
  }

  @media only screen and (max-width: 1440px) {
    width: 900px;
  }
  @media only screen and (max-width: 1024px) {
    width: 700px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    .today-deal-container {
      flex-direction: column;
    }
    a {
      display: flex;
      align-items: center;
    }
    .today-deal-item-img {
      flex-basis: 100%;
    }
    .item-container {
      flex-basis: 100%;
    }
  }
  @media only screen and (max-width: 425px) {
  }
`;

const ItemBox = styled.div`
  width: 24%;
  margin-bottom: 30px;

  img {
    width: 100%;
    transition: transform 0.2s;
  }
  a {
    font-size: 0;
    text-decoration: none;
    color: inherit;
  }
  .today-deal-item-img {
    overflow: hidden;
    border-radius: 8px;
    font-size: 0;
  }
  .item-container {
    text-align: left;
    margin: 7px 5px;
    padding: 0 5px;
  }
  .item-brand {
    font-size: 12px;
    color: #828c94;
  }
  .item-name {
    margin-top: 5px;
    font-size: 16px;
    color: #424242;
  }
  .item-price {
    font-size: 22px;
    font-weight: bold;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
    .item-name {
      color: #9f9f9f;
    }
  }

  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 3%;
    border-bottom: 1px solid lightgrey;
    &:last-child {
    }
    &:hover {
      img {
        transform: none;
      }
      .item-name {
        color: #424242;
      }
    }
  }
  @media only screen and (max-width: 425px) {
  }
`;
