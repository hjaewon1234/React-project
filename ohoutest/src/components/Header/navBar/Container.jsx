import NavBarComponent from "./Component";
import { useState } from "react";
import axios from "axios";

const NavBarContainer = () => {
  const onChange = (value) => {
    console.log(value);
  };
  const onSubmit = (value) => {
    console.log("onSubmit");
    axios
      .post("http://localhost:8080/api/search/search", { value })
      .then((data) => {
        console.log(data);
      });
  };
  return <NavBarComponent onChange={onChange} onSubmit={onSubmit} />;
};

export default NavBarContainer;
