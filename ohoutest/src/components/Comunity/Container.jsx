import CommunityComp from "./Components";
import ResponsiveComp from "../util/ResponsiveComp";
import { useDispatch, useSelector } from "react-redux";

const CommunityContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo);
  console.log(user);
  return ResponsiveComp(<CommunityComp user={user} />);
};

export default CommunityContainer;
