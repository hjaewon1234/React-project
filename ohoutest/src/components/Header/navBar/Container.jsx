import NavBarComponent from "./Component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { action } from "../../../modules/search";

const NavBarContainer = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const onSubmit = (value) => {
    if (!value.replace(" ", "")) return console.log("빈값이야");
    axios
      .post("http://localhost:8080/api/search/search", { value })
      .then((data) => {
        axios.post("/api/search/searchWord", { sword: value }).then(() => {
          navigation("/search/" + value);
          dispatch(action.setSword(value));
        });
      });
  };
  return <NavBarComponent onSubmit={onSubmit} />;
};

export default NavBarContainer;
