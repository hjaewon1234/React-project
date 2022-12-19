import CommunityComp from "./Components";
import ResponsiveComp from "../util/ResponsiveComp";
import { useDispatch, useSelector } from "react-redux";

const CommunityContainer = () => {
  const user = useSelector((state) => state.userInfo);
  return ResponsiveComp(<CommunityComp user={user} />);
};

export default CommunityContainer;
