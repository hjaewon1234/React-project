import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchProductComp = ({ itemArr }) => {
  return (
    <SearchProductBox>
      <div className="today-deal-container">
        {itemArr?.map((elem, idx) => {
          return (
            <ItemBox key={`itemArr - ${idx}`}>
              <Link to={"/"}>
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
    </SearchProductBox>
  );
};

export default SearchProductComp;

const SearchProductBox = styled.div`
  width: 100%;
  display: flex;
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
    justify-content: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const ItemBox = styled.div`
  width: 20%;
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
    margin-top: 5px;
    text-align: left;
  }
  .item-brand {
    font-size: 12px;
    color: #828c94;
    overflow-x: hidden;
  }
  .item-name {
    margin-top: 5px;
    font-size: 16px;
    color: #424242;
    overflow-x: hidden;
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
`;
