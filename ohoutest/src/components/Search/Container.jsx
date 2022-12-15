import SearchComponent from "./Component";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const searchWordAxios = (setState, sword) => {
  axios
    .post("/api/search/searchWord", { boxIdx: 1, idx: 4, sword: sword })
    .then((data) => {
      setState(() => data.data);
    });
};

const SearchContainer = () => {
  const [itemArr, setItemArr] = useState([]);
  const searchWord = useSelector((state) => state.search.sword);
  useEffect(() => {
    searchWordAxios(setItemArr, searchWord);
  }, [searchWord]);
  useEffect(() => {}, [itemArr]);
  return <SearchComponent sword={searchWord} itemArr={itemArr} />;
};

export default SearchContainer;
