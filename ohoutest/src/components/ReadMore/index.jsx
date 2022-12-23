import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

import ReadMoreHead from "./ReadMoreHead";
// import ReadMoreMain from "./ReadMoreMain";
// import ReadMoreFoot from "./ReadMoreFoot";

const ReadMore = () => {
  const [item, setItem] = useState({});
  const [input, setInput] = useState(0);
  const getProductItem = (idx) => {
    axios.post("/api/product/getProductItem", { id: idx }).then((data) => {
      setItem(data.data);
    });
  };

  return (
    <ReadMoreBox>
      <input
        type="number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getProductItem(input);
        }}
      >
        GET
      </button>
      <ReadMoreHead item={item} />
      {/* <ReadMoreMain />
      <ReadMoreFoot /> */}
    </ReadMoreBox>
  );
};

const ReadMoreBox = styled.div``;

export default ReadMore;
