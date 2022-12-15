import axios from "axios";
import { useEffect, useState } from "react";

import HotListComponent from "./Component";

const axiosPost = (setState) => {
  axios
    .post("http://localhost:8080/api/product/getProducts", {
      boxIdx: 5,
      idx: 40,
    })
    // 1번부터 4개까지, 1부터 시작(0부터 시작 아님)
    .then((data) => {
      setState(data.data);
    });
};

const HotListContainer = () => {
  const [itemArr, setItemArr] = useState([]);
  useEffect(() => {
    axiosPost(setItemArr);
  }, []);
  return <HotListComponent itemArr={itemArr} />;
};

export default HotListContainer;
