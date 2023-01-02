import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import NavBarComponent from "./Component";
import { action } from "../../../modules/search";

const NavBarContainer = () => {
  const [isOnline, setIsOnline] = useState(false);
  const state = useSelector((state) => state);
  const userInfo = useSelector((state) => state.userInfo);
  const userImg = userInfo.userImg;
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const onSubmit = (value) => {
    if (!value.replace(" ", "")) return "빈값이야";
    axios.post("/api/search/search", { value }).then((data) => {
      axios.post("/api/search/searchWord", { sword: value }).then(() => {
        navigation("/search/" + value);
        dispatch(action.setSword(value));
      });
    });
  };

  useEffect(() => {
    if (state.userInfo.userId) setIsOnline(true);
    else setIsOnline(false);
  });
  return (
    <NavBarComponent
      onSubmit={onSubmit}
      isOnline={isOnline}
      userImg={userImg}
    />
  );
};

export default NavBarContainer;
