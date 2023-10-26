import axios from "axios";
import { useEffect, useState } from "react";

import TodaysDealComponent from "./Component";

const axiosPost = (setState) => {
  axios // 요청보냄
    .post("/api/product/getProducts", {
      boxIdx: 1,
      idx: 4,
    })
    // 1번부터 4개까지, 1부터 시작(0부터 시작 아님)
    .then((data) => {
      setState(data.data);
    });
};

const TodaysDealContainer = () => {
  const [itemArr, setItemArr] = useState([]);
  useEffect(() => {
    axiosPost(setItemArr);
  }, []);
  return <TodaysDealComponent itemArr={itemArr} />;
};

export default TodaysDealContainer;
