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
`;

export default ReadMoreHead;
