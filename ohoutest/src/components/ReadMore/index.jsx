import axios from "axios";
import styled from "styled-components";

import ReadMoreHead from "./ReadMoreHead";
// import ReadMoreMain from "./ReadMoreMain";
// import ReadMoreFoot from "./ReadMoreFoot";

const ReadMore = () => {
  const getProductItem = () => {
    axios.post("/api/product/getProductItem").then((data) => {
      console.log(data.data);
    });
  };

  return (
    <ReadMoreBox>
      <button onClick={getProductItem}>요청보내기</button>
      <ReadMoreHead />
      {/* <ReadMoreMain />
      <ReadMoreFoot /> */}
    </ReadMoreBox>
  );
};

const ReadMoreBox = styled.div``;

export default ReadMore;
