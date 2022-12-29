import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchProductComp = ({ itemArr }) => {
  return (
    <>
      <MaxLengthBox>전체 {itemArr.length}개</MaxLengthBox>
      <SearchProductBox>
        <div className="hot-list-container">
          {itemArr?.map((elem, idx) => {
            return (
              <ItemBox itemArr={itemArr} key={`itemArr - ${idx}`}>
                <Link to={`/readmore/${elem.id}`}>
                  <div className="hot-list-item-img">
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
    </>
  );
};

export default SearchProductComp;

// const SearchProductBox = styled.div`
//   width: 80%;
//   display: flex;
//   margin: 0 auto;
//   margin-top: 10px;
//   .subtitle {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 20px;
//   }
//   .subtitle div {
//     margin: 0px 5px;
//     font-weight: bold;
//   }
//   .subtitle :first-child {
//     font-size: 24px;
//   }
//   .subtitle :last-child {
//     color: rgb(255, 119, 119);
//     letter-spacing: -1px;
//     text-decoration: none;
//   }
//   .today-deal-container {
//     justify-content: left;
//     width: 100%;
//     display: flex;
//     flex-wrap: wrap;
//     gap: 5%;
//   }
// `;

// const ItemBox = styled.div`
//   width: 21%;
//   img {
//     width: 100%;
//     transition: transform 0.2s;
//   }
//   a {
//     font-size: 0;
//     text-decoration: none;
//     color: inherit;
//   }
//   .today-deal-item-img {
//     overflow: hidden;
//     border-radius: 8px;
//     font-size: 0;
//   }
//   .item-container {
//     margin-top: 5px;
//     text-align: left;
//   }
//   .item-brand {
//     font-size: 12px;
//     color: #828c94;
//     overflow-x: hidden;
//   }
//   .item-name {
//     margin-top: 5px;
//     font-size: 16px;
//     color: #424242;
//     overflow-x: hidden;
//   }
//   .item-price {
//     font-size: 22px;
//     font-weight: bold;
//   }
//   &:hover {
//     img {
//       transform: scale(1.1);
//     }
//     .item-name {
//       color: #9f9f9f;
//     }
//   }
//   @media (max-width: 768px) {
//     & {
//       width: 80%;
//     }
//   }
// `;

const MaxLengthBox = styled.div`
  width: 1200px;
  margin: auto;
  text-align: left;
  color: grey;
  font-size: 0.8rem;
  margin-top: 50px;

  @media only screen and (max-width: 1440px) {
    width: 900px;
  }
  @media only screen and (max-width: 1024px) {
    width: 700px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 20px;
    margin-top: 20px;
  }
  @media only screen and (max-width: 425px) {
    margin-left: 10px;
  }
`;

const SearchProductBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;

  .subtitle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .subtitle div {
    font-size: 24px;
    margin: 0 5px;
    font-weight: bold;
  }
  .hot-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    word-break: break-word;
    flex-grow: 1;
  }

  @media only screen and (max-width: 1440px) {
    width: 900px;
  }
  @media only screen and (max-width: 1024px) {
    width: 700px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
  @media only screen and (max-width: 425px) {
  }
`;

const ItemBox = styled.div`
  width: 24%;
  margin: 0 0.5%;
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
  .hot-list-item-img {
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
    width: 40%;
    flex-grow: 1;
    padding: 3%;
    margin-left: 0;
    margin-right: 0;
    border-bottom: 1px solid lightgrey;
    &:hover {
      img {
        transform: none;
      }
      .item-name {
        color: #424242;
      }
    }
    &:last-child {
      ${(props) =>
        props.itemArr.length % 2 === 0
          ? ""
          : "margin-bottom: 0;flex-grow: 0;width: 50%;border-bottom: none;"}
    }
    &:last-child,
    &:nth-child(${(props) => props.itemArr.length - 1}) {
      ${(props) =>
        props.itemArr.length % 2 === 0
          ? "margin-bottom: 0;border-bottom: none;"
          : ""}
    }
  }
  @media only screen and (max-width: 425px) {
  }
`;
