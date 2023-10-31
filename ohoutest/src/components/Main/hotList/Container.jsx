import axios from "axios";
import { useEffect, useState } from "react";

import HotListComponent from "./Component";

const axiosPost = (setState) => {
  axios.post("/api/product/getallProducts").then((data) => {
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
