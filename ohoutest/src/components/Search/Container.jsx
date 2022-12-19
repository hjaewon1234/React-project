import SearchComponent from "./Component";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useDidMountEffect from "../util/useDidMountEffect";

const searchWordAxios = (setState, sword) => {
  axios
    .post("/api/search/searchWord", { boxIdx: 1, idx: 4, sword: sword })
    .then((data) => {
      setState(() => data.data);
    });
};

const SearchContainer = () => {
  let { sword } = useParams();
  const [itemArr, setItemArr] = useState([]);
  const searchWord = useSelector((state) => state.search.sword);

  useEffect(() => {
    searchWordAxios(setItemArr, sword);
  }, []);

  useDidMountEffect(() => {
    searchWordAxios(setItemArr, searchWord);
  }, [searchWord]);

  useEffect(() => {}, [itemArr]);
  return <SearchComponent itemArr={itemArr} />;
};

export default SearchContainer;
