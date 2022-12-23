import styled from "styled-components";

import ReadMoreCategoryContainer from "./ReadMoreCategory/Container.jsx";
import ReadMoreImageContainer from "./ReadMoreImage/Container";
import ReadMoreOrderInfoContainer from "./ReadMoreOrderInfo/Container";

const ReadMoreHead = ({ item }) => {
  return (
    <ReadMoreHeadBox>
      <ReadMoreCategoryContainer item={item} />
      <ReadMoreImageContainer />
      <ReadMoreOrderInfoContainer />
    </ReadMoreHeadBox>
  );
};

const ReadMoreHeadBox = styled.div``;

export default ReadMoreHead;
