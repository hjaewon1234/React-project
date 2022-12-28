import styled from "styled-components";

import ReadMoreCategoryContainer from "./ReadMoreCategory/Container.jsx";
import ReadMoreImageContainer from "./ReadMoreImage/Container";
import ReadMoreOrderInfoContainer from "./ReadMoreOrderInfo/Container";

const ReadMoreHead = ({ item }) => {
  return (
    <ReadMoreHeadBox>
      <ReadMoreCategoryContainer item={item} />
      <div className="head-box-inner">
        <ReadMoreImageContainer item={item} />

        <ReadMoreOrderInfoContainer item={item} />
      </div>
      <div className="mobile-order-ad">
        <img src="/img/read-more-ad.webp" />
      </div>
    </ReadMoreHeadBox>
  );
};

const ReadMoreHeadBox = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding: 5px;

  .head-box-inner {
    width: 100%;
    display: flex;
  }
  .head-box-inner > div,
  .head-box-inner > div + div {
    flex: 1;
  }
  .mobile-order-ad {
    display: none;
  }

  @media only screen and (max-width: 1440px) {
    width: 900px;
  }
  @media only screen and (max-width: 1024px) {
    width: 700px;
    .mobile-order-ad {
      display: block;
      cursor: pointer;
      font-size: 0;
    }
    .mobile-order-ad img {
      width: 100%;
      border-radius: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    .head-box-inner {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 425px) {
  }
`;

export default ReadMoreHead;
