import { useDispatch, useSelector } from "react-redux";
import { action, userInfoThunk, getUserThunk } from "../../../modules/userInfo";
import InfoComponent from "./Component";

const InfoContainer = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(userInfoThunk("asdf"));
  };
  const getUserOnClick = () => {
    dispatch(getUserThunk());
  };
  return (
    <InfoComponent
      onClick={onClick}
      getUserOnClick={getUserOnClick}
    ></InfoComponent>
  );
};

export default InfoContainer;
